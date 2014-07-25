ML.Routers.AppRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    ''          : 'dashboardShow',
    'tasks'     : 'lobsterShow'
  },
  
  dashboardShow: function () {
    ML.Collections.users.fetch();

    var dashboard = new ML.Views.Dashboard({ 
      collection: ML.Collections.users
    });
    this._swapView(dashboard)
  },
  
  // lobsterShow: function () {
    // var showView = ML.views.
  // },
  
  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
  
});