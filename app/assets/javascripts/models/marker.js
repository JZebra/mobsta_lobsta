ML.Models.Marker = Backbone.Model.extend({
  urlRoot: function() {
    return 'api/availabilities/' + this.get('availability_id') + '/availability_markers'
  },
  
  
});