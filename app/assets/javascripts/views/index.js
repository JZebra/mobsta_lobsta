ML.Views.Index = Backbone.CompositeView.extend({
  template: JST['index'],
  
  initialize: function () {
    this.renderFilter();
    this.listenTo(this.collection, 'sync', this.render);
    // this.listenTo(this.collection, 'add', this.addUser)
  },
  
  events: {
    // "click .lobster_card" : "renderPanel",
    "click .btn-see-more" : "renderRemainder",
    "click #see-more"     : "showRemainder"
  },
  
  renderPositions: function () {
    var view = this;
    for (var i = 0; i < 15 && i < this.collection.length; i++) {
      var user = this.collection.models[i];
      view.addCard("#position-" + i, user)
    }
  },
  
  // renderPanel: function (event) {
  //   event.preventDefault();
  //   var user = ML.Collections.users.getOrFetch(event.currentTarget.id);
  //   var panelView = new ML.Views.UserPanel({ model: user });
  //   //find the parent of the event.target and append the panel
  //   this.addSubview(".lobsters", panelView)
  // },
  //
  renderFilter: function () {
    var filterView = new ML.Views.FilterForm();
    this.addSubview(".filter-container", filterView);
  },
  
  showRemainder: function (event) {
    event.preventDefault();
    console.log('button clicked')
    var $button = $('#see-more')
    var $remainder = $('.remainder-container')
    $button.toggle();
    $remainder.toggle();
  },
  
  addCard: function (selector, user) {
    var cardView = new ML.Views.UserCard({ model: user })
    this.addSubview(selector, cardView)
  },
  
  render: function () {
    var content = this.template({ users: this.collection });
    this.$el.html(content);
    this.renderPositions();
    this.attachSubviews();
    return this;
  }
  
  
});