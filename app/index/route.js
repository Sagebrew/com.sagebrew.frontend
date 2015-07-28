import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
  var session = this.get('session');
  if (!session.isAuthenticated) {
    this.transitionTo('users.login');
  }
}
});
