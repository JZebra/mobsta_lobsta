ML.Views.Photo = Backbone.View.extend({
  template: JST['users/photo'],
  
  initialize: function () {
    this.render();
  },
  
  events: {
    'change .my-photo-upload': 'handleFile',
  },
  
  handleFile: function (event) {
    var file = event.currentTarget.files[0];
    var view = this;
    var reader = new FileReader();
    reader.onload = function(e) {
      // note that this isn't saving
      view.model.set('my_photo', this.result);
    }
    reader.readAsDataURL(file);
  },
  
  render: function () {
    debugger;
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
   
  
});
