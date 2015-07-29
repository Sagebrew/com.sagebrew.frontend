import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
   Ember.$('body').addClass('users');
 },
 deactivate: function() {
   Ember.$('body').removeClass('users');
 }
});
