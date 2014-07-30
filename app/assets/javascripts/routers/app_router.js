ML.Routers.AppRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    ''              : 'dashboardShow',
    'index'         : 'indexShow',
    'lobsters/:job' : 'filterShow',
    'profile'       : 'profileShow'
  },
  
  dashboardShow: function () {
    ML.Collections.users.fetch();
    var dashboard = new ML.Views.Dashboard({ collection: ML.Collections.users });
    this._swapView(dashboard);
  },
  
  
  indexShow: function () {
    ML.Collections.users.fetch();
    //how do we avoid double-fetching if the user comes from the dashboard?
    var index = new ML.Views.Index({ collection: ML.Collections.users });
    this._swapView(index);
  },
  
  filterShow: function (job) {
    // should look for users where user.categories.includes(job)
    // var lobsters = ML.Collections.users.where({
  //     user.categories: job })
    ML.Collections.users.fetch();
    
    var filtered = new ML.Views.Index({ collection: ML.Collections.users });
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