ML.Routers.AppRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    ''                : 'dashboardShow',
    'index'           : 'indexShow',
    'lobsters/:job'   : 'filterShow',
    'profile'         : 'profileShow',
    'users/:id/hire'  : 'hireShow'
  },
  
  dashboardShow: function () {
    ML.Collections.users.fetch();
    var dashboard = new ML.Views.Dashboard({ collection: ML.Collections.users });
    this._swapView(dashboard);
  },
  
  
  indexShow: function () {
    ML.Collections.users.fetch();
    var index = new ML.Views.Index({ collection: ML.Collections.users });
    this._swapView(index);
  },
  
  filterShow: function (job) {
    // should look for users where user.categories.includes(job)
    ML.Collections.users.fetch();
    
    var filtered = new ML.Views.Index({ collection: ML.Collections.users });
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
  
  hireShow: function (id) {
    //this would be cooler as a modal on the lobsters index
    var lobster = ML.Collections.users.getOrFetch(id);
    var hireForm = new ML.Views.HireForm({ model: lobster });
    this._swapView(hireForm);
  },
  
  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
  
});