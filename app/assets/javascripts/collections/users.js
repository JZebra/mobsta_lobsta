ML.Collections.Users = Backbone.Collection.extend({
  model: ML.Models.User,
  url: '/users',
  
  getOrFetch: function (id) {
    var user = this.get(id);
    var users = this;
    if (!user) {
      user = new ML.Models.User({ id: id });
      user.fetch({
        success: function () {
          users.add(user);
        }// .bind(this)
      });
    } else {
      user.fetch();
    }
    return user;
  } 
  
});

ML.Collections.users = new ML.Collections.Users();