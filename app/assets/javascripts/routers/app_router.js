ML.Routers.AppRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    ''          : 'dashboardShow',
    'index'     : 'indexShow',
    'map'       : 'mapShow'
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
  
  mapShow: function () {
    var map = new ML.Views.Map({});
    this._swapView(map);
  },
  
  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
  
});