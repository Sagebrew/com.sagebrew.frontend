import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel () {
    var session = this.get('session');
    if (!session.isAuthenticated) {
      this.transitionTo('users');
    }
  },
  model () {
    return this.store.find("user", "matt_wisner");
  }
});
