ML.Views.Dashboard = Backbone.CompositeView.extend({
  template: JST['dashboard'],
  
  initialize: function () {
    this.renderFilter();
    this.renderUsers();
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addUser)
  },
  
  events: {
    "click .lobster_card" : "renderPanel"
  },
  
  renderUsers: function () {
    var that = this;
    this.collection.each(function (user) {
      that.addUser(user)
    })
  },
  
  renderPanel: function (event) {
    event.preventDefault();
    var user = ML.Collections.users.getOrFetch(event.currentTarget.id);
    var panelView = new ML.Views.UserPanel({ model: user });
    this.addSubview(".lobsters", panelView)
  },
  
  renderFilter: function () {
    var filterView = new ML.Views.FilterForm();
    this.addSubview("#filter_form", filterView);
  },
  
  addUser: function (user) {
    var userView = new ML.Views.UserShow({ model: user })
    this.addSubview(".lobsters", userView)
  },
  
  render: function () {
    var content = this.template({ users: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
  
  
});