ML.Views.SkillsForm = Backbone.View.extend({
  template: JST['profile/skills_form'],
  
  initialize: function () {
    // this.listenTo(this.model, 'sync', this.render);
    this.render()
  },
  
  
  render: function () {
    var content = this.template({ categories: this.collection });
    this.$el.html(content);
    $("#info-popover").popover();
    return this;
  }
  
});