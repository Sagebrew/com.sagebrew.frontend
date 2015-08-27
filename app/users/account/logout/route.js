import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
    var session = this.get('session');
    if (!session.isAuthenticated) {
      this.transitionTo('users');
    }
  },
  actions : {
    sessionInvalidationSucceeded() {
      this._super();
      this.transitionTo('users');
    },
    logout() {
      this.get('session').invalidate('authenticator:custom');
      this.transitionTo('users');
    }
  }
});
