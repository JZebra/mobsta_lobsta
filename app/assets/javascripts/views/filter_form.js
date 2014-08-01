ML.Views.FilterForm = Backbone.View.extend({
  template: JST['filter_form'],
  
  initialize: function () {
    // this.collection = this.model.lists();
    this.listenTo(this.collection, 'sync', this.render);
    // this.render();
  },
  
  render: function () {
    var content = this.template({ categories: this.collection });
    this.$el.html(content);
    return this;
  }
  
  
  
});