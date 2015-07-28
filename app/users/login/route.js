import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function() {
   return {
     'identification': 'asdfasdfa',
     'password': '***'
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
      this.transitionTo('index');
      this._super();
    },
    authenticate: function() {
      var data = this.controller.getProperties('identification', 'password');
      return this.get('session').authenticate('authenticator:custom', data);
    }
  }
});
