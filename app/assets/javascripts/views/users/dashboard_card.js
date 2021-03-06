ML.Views.DashCard = Backbone.View.extend({
  template: JST['users/dash_card'],
  
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