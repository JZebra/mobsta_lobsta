ML.Views.Map = Backbone.View.extend({
  template: JST['profile/map'],
    
  events: {
    "click button" : "submit"
  },
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    
    var poly;
    this.markers = [];
    this.path = new google.maps.MVCArray;
    var center = new google.maps.LatLng(37.781014,-122.41142);

    this.$mapEl = $('<div>');
    this.$mapEl.addClass('map');
    this.map = new google.maps.Map(this.$mapEl[0], {
      zoom: 12,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    poly = new google.maps.Polygon({
      strokeWeight: 3,
      strokeOpacity: 0.6,
      strokeColor: '#0033ff',
      fillColor: '#5555FF'
    });
    poly.setMap(this.map);
    poly.setPaths(new google.maps.MVCArray([this.path]));
    google.maps.event.addListener(this.map, 'click', this.addPoint.bind(this));
  },


  addPoint: function (event) {
    this.path.insertAt(this.path.length, event.latLng);

    var marker = new google.maps.Marker({
      position: event.latLng,
      map: this.map,
      draggable: true
    });
    this.markers.push(marker);
    marker.setTitle("#" + this.path.length);

    google.maps.event.addListener(marker, 'click', function() {
      marker.setMap(null);
      for (var i = 0, I = this.markers.length; i < I && this.markers[i] != marker; ++i);
      this.markers.splice(i, 1);
      this.path.removeAt(i);
      }.bind(this)
    );

    google.maps.event.addListener(marker, 'dragend', function() {
      for (var i = 0, I = this.markers.length; i < I && this.markers[i] != marker; ++i);
      this.path.setAt(i, marker.getPosition());
      }.bind(this)
    );
  },
  
  
  submit: function () {
    // make set of marker objects
    var makeMarkerCollection = function(availability, response, status) {
      // takes same arguments as success function
      var posArr = this.path.getArray();
      _(posArr).each(function (pos) {
        var marker = new ML.Models.Marker({
          lat: pos.lat(),
          lng: pos.lng(),
          availability_id: availability.id
        });

        marker.save({}, {
          success: function(markerModel, response, status) {
            availability.markers().add(markerModel);
          },
          error: function() {
            console.log("Failed to save Marker")
          }
        })      
      });
    }
    // success makes collection of markers and associates to availability
    var availability = new ML.Models.Availability()
    availability.save({}, {
      success: makeMarkerCollection.bind(this),
      error: function() {
        console.log("Failed to save availability")
      }
    })

  },
  
  render: function () {
    var content = this.template({});
    this.$el.html(content);
    this.$('#map-container').prepend(this.$mapEl);
    return this;
  }
});

