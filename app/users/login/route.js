import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function() {
   return {
     'identification': 'asdfasdfa',
     'password': '***',
   };
 },

 actions : {
    sessionAuthenticationFailed: function(message) {
      this.set('errorMessage', message);
    },
    sessionAuthenticationSucceeded: function() {
      this.set('errorMessage', '');
      this.set('identification', '');
      this.set('password', '');
      this._super();
    },
    authenticate: function() {
      var data = this.controller.getProperties('identification', 'password');
      return this.get('session').authenticate('authenticator:custom', data);
    }
  }
});
