ML.Views.Profile = Backbone.CompositeView.extend({
  template: JST['profile/profile'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
  
});