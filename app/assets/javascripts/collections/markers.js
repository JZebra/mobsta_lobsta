ML.Collections.Markers = Backbone.Collection.extend({
  url: function() {
    return 'api/availability'
  },
  
  model: ML.Models.Marker,  
})

ML.Collections.markers = new ML.Collections.Markers([], {});