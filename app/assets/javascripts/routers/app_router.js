ML.Routers.AppRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    ''              : 'dashboardShow',
    'index'         : 'indexShow',
    'map'           : 'mapShow',
    'photo'         : 'photoShow',
    'lobsters/:job' : 'indexShow',
    'profile'       : 'profileShow'
  },
  
  dashboardShow: function () {
    ML.Collections.users.fetch();
    var dashboard = new ML.Views.Dashboard({ collection: ML.Collections.users });
    this._swapView(dashboard);
  },
  
  // lobsterShow: function () {
    // var showView = ML.views.
  // },
  
  indexShow: function () {
    //I think the collection should already be fetched....
    // ML.Collections.users.fetch();
    
    var index = new ML.Views.Index({ collection: ML.Collections.users });
    this._swapView(index);
  },
  
  filterShow: function (job) {
    // should look for users where user.categories.includes(job)
    // var lobsters = ML.Collections.users.where({
  //     user.categories: job })
    
    var filtered = new ML.Views.Index({ collection: lobsters });
    this._swapView(filtered);
  },
  
  profileShow: function (id) {
    var currentUser = ML.Collections.users.getOrFetch(ML.currentUserID);
    ML.Collections.categories.fetch();
    var profile = new ML.Views.Profile({ 
      model: currentUser, 
      collection: ML.Collections.categories
    });
    this._swapView(profile);
  },
  
  mapShow: function (id) { 
    var availability = new ML.Models.Availability({ user_id: ML.currentUserID })
    var map = new ML.Views.Map({ model: availability });
    this._swapView(map);
  },
  
  photoShow: function () {
    var photo = new ML.Views.Photo({});
    this._swapView(photo);
  },
  
  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
  
});