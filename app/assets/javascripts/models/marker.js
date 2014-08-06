ML.Models.Marker = Backbone.Model.extend({
  urlRoot: function() {
    return 'api/availabilities/' + this.get('availability_id') + '/availability_markers'
  },
  
  latLng: function () {
    return new google.maps.LatLng(this.get('lat'), this.get('lng'));
  }
  
});