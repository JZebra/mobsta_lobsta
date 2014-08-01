ML.Views.Profile = Backbone.CompositeView.extend({
  template: JST['profile/profile'],
  
  //no collection or model to listenTo...
  initialize: function () {
    this.skills = ML.Collections.skills.fetch();
    
    this.render();
  },
  
  events: {
    "click #tab-map": "initMap"
  },

  renderMap: function () {
    // var availability = new ML.Models.Availability({ model: this.model })
    this.mapView = new ML.Views.Map({ model: this.model });
    this.$('#map').html(this.mapView.render().$el);
  },
  
  renderPhoto: function () {
    this.photoView = new ML.Views.Photo({ model: this.model });
    this.$('#photo').html(this.photoView.render().$el);
  },
  
  initMap: function(){
    this.mapView.initializeMap();
  },
  
  renderSkills: function () {
    var skills = ML.Collections.skills;
    
    this.skillsIndex = new ML.Views.SkillsIndex(
      { 
        collection: skills,
        categories: ML.Collections.categories 
      }
    );
    this.skillsForm = new ML.Views.SkillsForm(
      { 
        collection: skills,
        categories: ML.Collections.categories 
      }
    );
    
    this.$('#rates').html(this.skillsIndex.render().$el);
    this.$('#rates').append(this.skillsForm.render().$el);
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