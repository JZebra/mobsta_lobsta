ML.Views.Dashboard = Backbone.CompositeView.extend({
  template: JST['dashboard'],
  
  initialize: function () {
    // this.renderCards();
    this.listenTo(this.collection, 'sync', this.render);
    // this.listenTo(this.collection, 'add', this.addCard);
  },

  renderCards: function () {
    var that = this;
    var recommended = this.collection.sample(3)
    var i = 0
    _(recommended).each(function (user) {
      that.addCard(user, i);
      i++;
    })
  },
  
  addCard: function (user, counter) {
    var cardView = new ML.Views.DashCard({ model: user })
    this.addSubview(".position-" + counter, cardView)
  },
  
  render: function () {
    var content = this.template({ users: this.collection });
    this.$el.html(content);
    this.renderCards();
    this.attachSubviews();
    return this;
  }
});