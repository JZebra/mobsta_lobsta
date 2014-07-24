ML.Collections.Users = Backbone.Collection.extend({
  model: ML.Models.User,
  url: 'api/users',
  
  getOrFetch: function (id) {
    var user = this.get(id);
    
    if (!user) {
      user = new ML.Models.User({ id: id });
      user.fetch({
        success: function () {
          this.add(user);
        }.bind(this)
      });
    } else {
    user.fetch();
    }
    return user;
  } 
  
});

ML.Collections.users = new ML.Collections.Users