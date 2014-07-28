ML.Views.Map = Backbone.View.extend({
  template: JST['users/map'],
  
  initialize: function () {
    // var poly, map;
 //    var markers = [];
 //    var path = new google.maps.MVCArray;
 //
 //    function initialize() {
 //      var start = new google.maps.LatLng(37.781014,-122.41142);
 //
 //      map = new google.maps.Map(document.getElementById("map"), {
 //        zoom: 12,
 //        center: start,
 //        mapTypeId: google.maps.MapTypeId.ROADMAP
 //      });
 //
 //      poly = new google.maps.Polygon({
 //        strokeWeight: 3,
 //        fillColor: '#5555FF'
 //      });
 //      poly.setMap(map);
 //      poly.setPaths(new google.maps.MVCArray([path]));
 //
 //      google.maps.event.addListener(map, 'click', addPoint);
 //    }
 //
 //    function addPoint(event) {
 //      path.insertAt(path.length, event.latLng);
 //
 //      var marker = new google.maps.Marker({
 //        position: event.latLng,
 //        map: map,
 //        draggable: true
 //      });
 //      markers.push(marker);
 //      marker.setTitle("#" + path.length);
 //
 //      google.maps.event.addListener(marker, 'click', function() {
 //        marker.setMap(null);
 //        for (var i = 0, I = markers.length; i < I && markers[i] != marker; ++i);
 //        markers.splice(i, 1);
 //        path.removeAt(i);
 //        }
 //      );
 //
 //      google.maps.event.addListener(marker, 'dragend', function() {
 //        for (var i = 0, I = markers.length; i < I && markers[i] != marker; ++i);
 //        path.setAt(i, marker.getPosition());
 //        }
 //      );
 //    }

  },

  render: function () {
    debugger;
    var content = this.template({});
    this.$el.html(content);
    return this;
  }
});

