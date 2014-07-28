ML.Models.Availability = Backbone.Model.extend({
  urlRoot: 'api/availabilities',
  
  initialize: function (model, options) {
    // this.user = options.user;
    //where does this get passed from?
  },
  
  markers: function() {
    if(!this._markers){
      this._markers = new ML.Collections.Markers([], { availability: this });
    }
    return this._markers;
  }
});