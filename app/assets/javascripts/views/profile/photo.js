ML.Views.Photo = Backbone.View.extend({
  template: JST['profile/photo'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
    //depends on getOrFetch firing a sync event
    //or maybe not...
  },
  
  events: {
    'change .photo-upload': 'handleFile',
    'submit form'         : 'saveFile'
  },
  
  handleFile: function (event) {
    var file = event.currentTarget.files[0];
    var reader = new FileReader();
    var view = this;
    reader.onload = function(e) {
      view.model.set('image', this.result);
    }
    reader.readAsDataURL(file);
  },
  
  saveFile: function (event) {
    event.preventDefault();
    var view = this;
    debugger;
    view.model.save({}, {
      success: function () {
        window.alert("Saved!");
        //change this to a bar at the top at some point
        view.render();
      },
      error: function () {
        console.log("Failed to save user model")
      }
    });
  },
  
  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
   
  
});
