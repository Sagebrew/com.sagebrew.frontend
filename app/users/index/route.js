import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

// This copy pasted from the users.account.login route since I suck at ember.
// Needs to be merged together.
export default Ember.Route.extend(ApplicationRouteMixin, {
 actions : {
    sessionAuthenticationFailed: function(message) {
      this.controller.set('errorMessage', message);
      this.transitionTo('users.account.login');
      this._super();
    },
    sessionAuthenticationSucceeded: function() {
      this.controller.setProperties({errorMessage : '', identification : '', password : ''});
      this.transitionTo('index');
      this._super();
    },
    authenticate: function() {
      var data = this.controller.getProperties('identification', 'password');
      return this.get('session').authenticate('authenticator:custom', data);
    }
  }
});
