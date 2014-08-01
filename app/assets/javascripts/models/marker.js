ML.Models.Marker = Backbone.Model.extend({
  urlRoot: function() {
    return 'api/availabilities/' + this.get('availability_id') + '/availability_markers'
  },
  
  lat: function () {
    return this.get("lat")
  },
  
  lng: function () {
    return this.get("lng")
  },
  
  latLng: function () {
    return (this.lat(), this.lng())
  }
  
});