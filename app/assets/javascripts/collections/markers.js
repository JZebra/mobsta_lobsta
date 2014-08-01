ML.Collections.Markers = Backbone.Collection.extend({
  url: function() {
    return 'api/availability'
  },
  
  model: ML.Models.Marker,  
  
  initialize: function(models, options) {
    if(options.availability) {
      this.availability = options.availability      
    }
  }
})

ML.Collections.markers = new ML.Collections.Markers([], {});