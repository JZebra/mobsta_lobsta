ML.Views.Category = Backbone.View.extend({
  template: JST['profile/category'],
  
  initialize: function (options) {
    this.user = options.user;
    this.category = options.category;
    // this.listenTo(this.category, 'sync', this.render)
    this.listenTo(this.user, 'sync', this.render);
  },
  
  render: function () {
    var skills = this.user.get('skills')
    var view = this;
    var skill = _.filter(skills, function(skill) {
      skill.cat_id === view.category.get('id')
    });
    
    //wtf am I doinggggg
    if (skill) { 
      this.skill = skill
    } else {
      this.skill = {cat_id: view.category.get('id'), rate: '', pitch: ''}
    };
    
    var content = this.template({ category: this.category, skill: this.skill });
    this.$el.html(content);
    return this;
  }
  
});