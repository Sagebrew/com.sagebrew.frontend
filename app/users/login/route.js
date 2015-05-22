import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions : {
    authenticate: function() {
      console.log("SUP");
      var data = this.getProperties('identification', 'password');
      return this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', data);
    }
  }

});
