ML.Views.UserPanel = Backbone.View.extend({
  className: "lobster_panel row",
  
  template: JST['users/panel'],
  
  initialize: function () {
    // this.collection = this.model.lists();
    this.listenTo(this.model, 'sync', this.render);
  },
  
  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
  
  
});