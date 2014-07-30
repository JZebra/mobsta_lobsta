ML.Views.HireForm = Backbone.View.extend({
  template: JST['users/hire'],
  
  initialize: function (options) {
    this.categories = options.categories;
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  events:{
    "submit #skill-form" : "saveSkill"
  },
  
  saveSkill: function (event) {
    event.preventDefault();
    var view = this;
    var data = $(event.target).serializeJSON();
    this.collection.create(data, {
      wait: true,
      success: function () {
        view.render();
        //event.target should reset
      }
    });
  },
  
  
  render: function () {
    var content = this.template({  
      categories: this.categories 
    });
    this.$el.html(content);
    return this;
  }
  
});