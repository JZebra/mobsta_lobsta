ML.Views.Index = Backbone.CompositeView.extend({
  template: JST['index'],
  
  initialize: function () {
    this.renderFilter();
    this.renderTopThree();
    this.listenTo(this.collection, 'sync', this.render);
    // this.listenTo(this.collection, 'add', this.addUser)
  },
  
  events: {
    "click .lobster_card" : "renderPanel",
    "click .btn-see-more" : "renderRemainder"
  },
  
  renderTopThree: function () {
    var that = this;
    this.collection.each(function (user) {
      that.addCard(user)
    })
  },
  
  renderPanel: function (event) {
    event.preventDefault();
    var user = ML.Collections.users.getOrFetch(event.currentTarget.id);
    var panelView = new ML.Views.UserPanel({ model: user });
    //find the parent of the event.target and append the panel
    this.addSubview(".lobsters", panelView)
  },
  
  renderFilter: function () {
    var filterView = new ML.Views.FilterForm();
    this.addSubview(".filter-container", filterView);
  },
  
  renderRemainder: function () {
    var remainderView = new ML.Views.Remainder();
    this.addSubview(".remainder-container", remainderView);
  },
  
  addCard: function (user) {
    var cardView = new ML.Views.UserCard({ model: user })
    this.addSubview(".lobsters", cardView)
  },
  
  render: function () {
    var content = this.template({ users: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
  
  
});