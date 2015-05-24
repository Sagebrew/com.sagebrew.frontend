import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function() {
   return {
     'identification': 'asdfasdfa',
     'password': '***',
   };
 },
  actions : {
    authenticate: function() {
      console.log(this.controller.get('password'));
      console.log("SUP");
      var data = this.controller.getProperties('identification', 'password');
      data.client_id = 'jo7YyhF2apgPtJHJaVNFAysRRVJWry';
      console.log(data);
      return this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', data);
    }
  }
});
