ML.Views.Map = Backbone.View.extend({
  template: JST['profile/map'],
    
  events: {
    "click button" : "submit"
  },
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.mapInitialized = false;
  },
  
  initializeMap: function () {
    if(this.mapInitialized){
      return;
    }
    this.mapInitialized = true;
    //center is set to app academy ;)
    var center = new google.maps.LatLng(37.781014,-122.41142);
    
    this.markers = [];
    this.path = new google.maps.MVCArray;

    this.$mapEl = this.$('.map');
    this.map = new google.maps.Map(this.$mapEl[0], {
      zoom: 12,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    this.initializePoly();
    this.initializeMarkers();
  },
  
  initializePoly: function () {
    var poly = new google.maps.Polygon({
      paths: [this.path],
      map: this.map,
      strokeWeight: 3,
      strokeOpacity: 0.6,
      strokeColor: '#0033ff',
      fillColor: '#5555FF'
    });
    google.maps.event.addListener(this.map, 'click', this.addPoint.bind(this));
  },
  
  initializeMarkers: function(){
    var that = this;
    this.model.markers().each(function(marker){
      that.addPoint({latLng: marker.latLng()});
    })
  },
  
  addPoint: function (params) {
    this.path.insertAt(this.path.length, params.latLng);

    var marker = new google.maps.Marker({
      position: params.latLng,
      map: this.map,
      draggable: true
    });
    
    this.markers.push(marker);
    marker.setTitle("#" + this.path.length);

    google.maps.event.addListener(marker, 'click', function() {
      marker.setMap(null);
      for (var i = 0, j = this.markers.length; i < j && this.markers[i] != marker; ++i);
      this.markers.splice(i, 1);
      this.path.removeAt(i);
      }.bind(this)
    );

    google.maps.event.addListener(marker, 'dragend', function() {
      for (var i = 0, j = this.markers.length; i < j && this.markers[i] != marker; ++i);
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
   this.listenTo(this.model, 'sync', this.render);
  },
  
  render: function () {

    // debugger;
    var content = this.template({});
    this.$el.html(content);
    
    return this;
  }
});

