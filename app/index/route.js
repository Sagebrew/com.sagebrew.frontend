import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  beforeModel () {
    var session = this.get('session');
    if (!session.isAuthenticated) {
      this.transitionTo('users');
    }
  },
  getNews() {
    return Ember.$.ajax({
      url:  config.APP.API_HOST + '/v1/me/newsfeed/',
      type: 'GET'
    });
  },
  model () {
    return Ember.RSVP.hash({
      news:     this.getNews()
    });
  }
});
