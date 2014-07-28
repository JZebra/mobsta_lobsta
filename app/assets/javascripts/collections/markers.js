ML.Collections.Markers = Backbone.Collection.extend({
  model: ML.Models.Marker,
  
  initialize: function(models, options) {
    if(options.availability) {
      this.availability = options.availability      
    }
  }
})