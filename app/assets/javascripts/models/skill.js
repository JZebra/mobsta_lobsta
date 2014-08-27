ML.Models.Skill = Backbone.Model.extend({
  urlRoot: function() {
    return 'api/users/' + ML.currentUserID + '/skills'
  },
  
  initialize: function (model, options) {
  }
  
});