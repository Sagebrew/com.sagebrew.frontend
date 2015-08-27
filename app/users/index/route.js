import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

// This copy pasted from the users.account.login route since I suck at ember.
// Needs to be merged together.
export default Ember.Route.extend(ApplicationRouteMixin, {
 actions : {
    sessionAuthenticationFailed: function(message) {
      this._super();
      this.controller.setProperties({errorMessage : message, identification : '', password : ''});
      this.transitionTo('users.account.login');
    },
    sessionAuthenticationSucceeded: function() {
      this._super();
      this.controller.setProperties({errorMessage : '', identification : '', password : ''});
      this.transitionTo('index');
    },
    authenticate: function() {
      var data = this.controller.getProperties('identification', 'password');
      return this.get('session').authenticate('authenticator:custom', data);
    }
  }
});
