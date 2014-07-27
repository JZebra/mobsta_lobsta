ML.Views.Remainder = Backbone.CompositeView.extend({
  template: JST['remainder'],
  
  initialize: function () {
    // this.collection = this.model.lists();
    // this.listenTo(this.model, 'sync', this.render);
    this.render();
  },
  
  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
  
});