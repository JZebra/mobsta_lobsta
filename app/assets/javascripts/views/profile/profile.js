ML.Views.Profile = Backbone.CompositeView.extend({
  template: JST['profile/profile'],
  
  //no collection or model to listenTo...
  initialize: function () {
    this.skills = ML.Collections.skills.fetch();
    this.render();
  },
  
  renderMap: function () {
    // var availability = new ML.Models.Availability({ model: this.model })
    var mapView = new ML.Views.Map({ model: this.model });
    this.addSubview("#map", mapView);
  },
  
  renderPhoto: function () {
    var photoView = new ML.Views.Photo({ model: this.model });
    this.addSubview("#photo", photoView);
  },
  
  renderSkills: function () {
    var skills = ML.Collections.skills;
    
    var skillsIndex = new ML.Views.SkillsIndex({ 
      collection: skills,
      categories: ML.Collections.categories });
    var skillsForm = new ML.Views.SkillsForm({ 
      collection: skills,
      categories: ML.Collections.categories });
      
    this.addSubview('#rates', skillsIndex);
    this.addSubview('#rates', skillsForm);
  },
  
  render: function () {
    var content = this.template({});
    this.$el.html(content);
    this.renderSkills();
    this.renderPhoto();
    this.renderMap(); //tried here
    return this;
  }
  
});