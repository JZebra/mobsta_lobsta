ML.Views.Photo = Backbone.View.extend({
  template: JST['profile/photo'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
    //depends on getOrFetch firing a sync event
    //or maybe not...
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
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
   
  
});
