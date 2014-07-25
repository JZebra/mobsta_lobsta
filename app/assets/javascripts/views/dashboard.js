ML.Views.Dashboard = Backbone.CompositeView.extend({
  template: JST['dashboard'],
  
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  renderUsers: function () {
    var that = this;
    this.collection.each(function (user) {
      var userView = new ML.Views.UserShow({ model: user })
      that.addSubview(".lobsters", userView)
    })
  },
  
  render: function () {
    var content = this.template({ users: this.collection });
    this.$el.html(content);
    this.renderUsers();
    return this;
  }
  
  
});