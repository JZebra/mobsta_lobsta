ML.Views.Profile = Backbone.View.extend({
  template: JST['profile/skill'],
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
    this.listenTo(this.user, 'sync', this.render);
  },
  
  render: function () {
    var content = this.template({ model: this.model, user: this.user });
    this.$el.html(content);
    return this;
  }
  
});