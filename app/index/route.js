import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel () {
    var session = this.get('session');
    if (!session.isAuthenticated) {
      this.transitionTo('users');
    }
  },
  getNews() {
    return Ember.$.ajax({
      url:  'https://sagebrew.local.dev/v1/me/newsfeed/',
      type: 'GET'
    });
  },
  model () {
    return Em.RSVP.hash({
      news:     this.getNews()
    });
  }
});
