ML.Views.Dashboard = Backbone.CompositeView.extend({
  template: JST['users/show'],
  
  initialize: function () {
    this.collection = this.model.lobsters();
    this.listenTo(this.model, 'sync', this.render);
  },
  
  render: function () {
    var content = this.template({ lobster: this.model });
    this.$el.html(content);
    return this;
    
  },
  
  
});