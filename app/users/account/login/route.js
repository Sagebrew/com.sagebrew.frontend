import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
 actions : {
    sessionAuthenticationFailed: function(message) {
      this.controller.set('errorMessage', message.error_description);
    },
    sessionAuthenticationSucceeded: function() {
      console.log("HELLO");
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
