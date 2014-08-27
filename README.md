#MobstrLobstr

###Concept

Mobstrlobstr is a comically themed Taskrabbit clone. Instead of taskposters and rabbits, I have taskposters and lobsters. It is designed to have almost all of the functionality of Taskrabbit except for payment (because the app would actually become a legal liability at that point.) The live version (www.mobstrlobstr.com) database is populated with villains and rogues from some of my favorite games and movies. 


###Technologies

PostgreSQL database with Rails backend. There are only two pages, the splash and the root. Routing depends on whether the user is logged in. 

The root is rendered as a single page thanks to Backbone.js. Single page functionality greatly improves user experience because it decreases the amount of data that needs to be fetched from the server. Page loads are seamless, without the blank screen of a hard refresh. 

The map (create a user, navigate to Profile- Availability) uses the google maps API to render a map. The API has built in methods to create a polygon and markers. Some custom javascript allows me to place markers on click and save them to the database. 

Page layout borrows heavily from Taskrabbit, though I've simplified some of the components. The CSS is completely custom. I wanted the design to be "darker" than Taskrabbit, but to exude a degree of classiness. I've also pushed the Lobster theme wherever possible. 


###Current Functionality: 

#####Getting hired:
- Users can sign up and log in.
- Users can create/edit a profile.
- Users can set their availability region. This region is saved and loaded when the user edits their region.

#####Hiring:
- Users can view other lobsters.
- Users can hire other lobsters. Form submission creates a task object between the two users.


###To do:

- Improve styling on dashboard and index. They should be more responsive.
- Users can search for lobsters based on their skills and availability region.
- Submitting a task sends an email to the task poster and the lobster.
- Streamline skill submission. Instead of a form where users can update their skills one by one, doubleclicking a skill changes the view to an editable form.