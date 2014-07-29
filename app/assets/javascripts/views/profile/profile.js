ML.Views.Profile = Backbone.CompositeView.extend({
  template: JST['profile/profile'],
  
  initialize: function () {
    // this.listenTo(this.model, 'sync', this.render);
    // this.listenTo(this.collection, 'sync', this.render);
    
    this.render();
  },
  
  // events: {
  //   'dblclick .edit-category' : 'editCat',
  // },
  
  // editCat: function (event) {
  //   event.preventDefault();
  //   console.log(event.target);
  // },
  //
  // renderCategories: function () {
  //   var view = this;
  //   this.collection.each( function (category) {
  //     var catView = new ML.Views.Category({
  //       user: view.model,
  //       category: category
  //     });
  //     view.addSubview('.categories-list', catView);
  //   });
  // },
  
  renderSkills: function () {
    var skillsIndex = new ML.Views.SkillsIndex({ collection: ML.Collections.categories });
    var skillsForm = new ML.Views.SkillsForm({ collection: ML.Collections.categories });
    this.addSubview('#rates', skillsIndex);
    this.addSubview('#rates', skillsForm);
  },
  
  render: function () {
    var content = this.template({});
    this.$el.html(content);
    this.renderSkills();
    return this;
  }
  
});