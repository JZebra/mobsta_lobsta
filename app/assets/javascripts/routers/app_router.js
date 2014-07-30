ML.Routers.AppRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    ''              : 'dashboardShow',
    'index'         : 'indexShow',
    'lobsters/:job' : 'indexShow',
    'profile'       : 'profileShow'
  },
  
  dashboardShow: function () {
    ML.Collections.users.fetch();
    var dashboard = new ML.Views.Dashboard({ collection: ML.Collections.users });
    this._swapView(dashboard);
  },
  
  
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
    //does getOrFetch still trigger sync events?
    ML.Collections.categories.fetch();
    var profile = new ML.Views.Profile({ 
      model: currentUser, 
      collection: ML.Collections.categories
    });
    this._swapView(profile);
  },
  
  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
  
});