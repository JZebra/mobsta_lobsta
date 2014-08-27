ML.Views.SkillsIndex = Backbone.View.extend({
  template: JST['profile/skills_index'],
  
  initialize: function (options) {
    this.categories = options.categories;
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  render: function () {
    var content = this.template({ 
      collection: this.collection, 
      categories: this.categories 
    });
    this.$el.html(content);
    return this;
  }
  
});

//
// <% var skill = this.collection.findWhere({ %>
//   <% cat_id: category.get('id') %>
// <% }) %>
// <h3 class="pull-right">$<%= skill.escape("rate") %></h3>
// <p><%= skill.escape("pitch") %></p>