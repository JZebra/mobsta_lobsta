ML.Views.HireForm = Backbone.View.extend({
  template: JST['users/hire'],
  
  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },
  
  events: {
    "submit #hire-form" : "saveTask"
  },
  
  saveTask: function (event) {
    event.preventDefault();
    var view = this;
    var data = $(event.target).serializeJSON();
    var task = new ML.Models.Task()
    task.save(data, {
      wait: true,
      success: function () {
        window.alert("The lobster has been notified. Expect to be contacted in the next 30 minutes.")
      },
      error: function () {
        console.log('wtf?')
      }
    });
  },
  
  render: function () {
    debugger;
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
  
});

