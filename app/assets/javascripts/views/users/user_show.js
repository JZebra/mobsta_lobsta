ML.Views.UserShow = Backbone.View.extend({
  temaplate: JST['users/show']
  
  
  initialize: function () {
    this.collection = this.model.lists();
    this.listenTo(this.model, 'sync', this.render);
  },
  
  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
    
  },
  
  
});