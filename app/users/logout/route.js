import Ember from 'ember';

export default Ember.Route.extend({
  actions : {
  logout: function() {
    this.get('session').invalidate('authenticator:custom');
    this.transitionTo('users.login');
   },
 }
});
