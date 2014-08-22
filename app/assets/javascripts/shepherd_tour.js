var tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-arrows',
    scrollTo: true
  }
});

var lobster_tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-arrows',
    scrollTo: true
  }
});

var poster_tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-arrows',
    scrollTo: true
  }
});
  
tour.addStep('intro', {
  title: "Welcome!",
  text: "This quick tour will show you all of the features of MobstrLobstr. Would you like to work as a Lobster or hire Lobsters?",
  attachTo: "#main",
  classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text'
  buttons: [{
    text: "I want to work",
    classes: 'shepherd-button-primary',
    action: function() {return lobster_tour.start()}    
  }, {
    text: "I want to hire",
    classes: 'shepherd-button-primary',
    action: function() {return poster_tour.start()}    
  }, {
    text: "Skip tour",
    classes: 'shepherd-button-secondary',
    action: function() {return tour.hide()} 
  }
  }]
});

lobster_tour.addStep('profile', {
  text: "You need to make a profile before task posters can hire you",
  attachTo: "#profile",
  classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text'
  buttons: [{
    text: "Skip tour",
    classes: 'shepherd-button-secondary',
    action: function() {return lobster_tour.hide()} 
  }]
});



})