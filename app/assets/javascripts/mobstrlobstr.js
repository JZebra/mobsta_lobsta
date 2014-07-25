window.ML = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    new ML.Routers.AppRouter({
      $rootEl: $('#main')
      
    });
    Backbone.history.start();
  }
};
