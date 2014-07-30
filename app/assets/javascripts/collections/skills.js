ML.Collections.Skills = Backbone.Collection.extend({
  model: ML.Models.Skill,
  url: '/api/skills',
  
  getOrFetch: function (id) {
    var skill = this.get(id);
    var skills = this;
    if (!skill) {
      skill = new ML.Models.Skill({ id: id });
      skill.fetch({
        success: function () {
          skills.add(skill);
        }// .bind(this)
      });
    } else {
      skill.fetch();
    }
    return skill;
  } 
  
  
});

ML.Collections.skills = new ML.Collections.Skills();
