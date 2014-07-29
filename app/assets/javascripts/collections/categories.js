ML.Collections.Categories = Backbone.Collection.extend({
  model: ML.Models.Category,
  url: '/api/categories',
});

ML.Collections.categories = new ML.Collections.Categories();