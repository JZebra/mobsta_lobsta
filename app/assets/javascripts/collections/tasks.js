ML.Collections.Tasks = Backbone.Collection.extend({
  model: ML.Models.Task,
  url: 'api/tasks',
  
  getOrFetch: function (id) {
    var task = this.get(id);
    
    if (!task) {
      task = new ML.Models.Task({ id: id });
      task.fetch({
        success: function () {
          this.add(task);
        }.bind(this)
      });
    } else {
    task.fetch();
    }
    return task;
  } 
  
});

ML.Collections.tasks = new ML.Collections.Tasks