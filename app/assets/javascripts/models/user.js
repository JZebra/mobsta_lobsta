ML.Models.User = Backbone.Model.extend({
  urlRoot: '/users',
  markers: function(){
    if(!this._markers){
      this._markers = new ML.Collections.Markers(this._markers);
      
    }
    return this._markers;
  },
  parse: function(response){
    if(response.markers){
      this.markers().set(response.markers);
      delete response.markers;
    }
    return response;
  }
  
  // initialize: function() {
  //   this.createPath();
  //   debugger;
  // },
  //
  // createPath: function () {
  //   var model = this;
  //   this.lats = [];
  //   this.lngs = [];
  //   _(this.markers).each(function (marker) {
  //     model.lats.push(marker.lat())
  //     model.lngs.push(marker.lng())
  //   });
  // }

});