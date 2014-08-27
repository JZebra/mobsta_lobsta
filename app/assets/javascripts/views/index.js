ML.Views.Index = Backbone.CompositeView.extend({
  template: JST['index'],
  
  initialize: function () {
    this.categories = ML.Collections.categories;
    this.renderFilter();
    //this.collection is users
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  events: {
    // "click .lobster_card" : "renderPanel",
    "click #see-more"     : "showRemainder"
  },
  
  renderPositions: function () {
    var view = this;
    for (var i = 0; i < 15 && i < this.collection.length; i++) {
      var user = this.collection.models[i];
      if (i < 3) {
       view.addMdCard("#position-" + i, user)
      } else {
        view.addCard("#position-" + i, user)
      }
      //this is wasteful. Is there a better way?
    }
  },
  
  // enlargeTopThree: function () {
  //   for (var i = 0; i < 3; i++) {
  //     var image = $('#position-' + i).find('img')
  //     image.removeClass(["img-circle-sm"])
  //     image.addClass(["img-circle-md"])
  //   }
  // },
  
  // renderPanel: function (event) {
  //   event.preventDefault();
  //   var user = ML.Collections.users.getOrFetch(event.currentTarget.id);
  //   var panelView = new ML.Views.UserPanel({ model: user });
  //   //find the parent of the event.target and append the panel
  //   this.addSubview(".lobsters", panelView)
  // },
 
  renderFilter: function () {
    var filterView = new ML.Views.FilterForm({ collection: this.categories});
    this.addSubview(".filter-container", filterView);
  },
  
  showRemainder: function (event) {
    event.preventDefault();
    var $button = $('#see-more')
    var $remainder = $('.remainder-container')
    $button.toggle();
    $remainder.toggle();
  },
  
  addCard: function (selector, user) {
    var cardView = new ML.Views.UserCard({ model: user })
    if (this.subviews(selector)[0]) {
      this.removeSubview(selector, this.subviews(selector)[0]); 
    }
    this.addSubview(selector, cardView);
  },
  
  addMdCard: function (selector, user) {
    var cardView = new ML.Views.UserMdCard({ model: user })
    if (this.subviews(selector)[0]) {
      this.removeSubview(selector, this.subviews(selector)[0]); 
    }
    this.addSubview(selector, cardView);
  },
  
  render: function () {
    var content = this.template({ users: this.collection });
    this.$el.html(content);
    this.renderPositions();
    this.attachSubviews();
    // this.enlargeTopThree();
    return this;
  }
});