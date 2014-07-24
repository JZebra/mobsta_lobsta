window.ML = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    new ML.Routers.Router;
    Backbone.history.start();
  }
};