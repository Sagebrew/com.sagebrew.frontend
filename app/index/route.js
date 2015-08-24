import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  getPresident(username) {
    var url = config.APP.API_HOST + '/' + config.APP.API_NAMESPACE;
    return Ember.$.ajax({
      url:  url + '/profiles/' + username + '/president/',
      type: 'GET',
    });
  },
  getHoseReps(username) {
    var url = config.APP.API_HOST + '/' + config.APP.API_NAMESPACE;
    return Ember.$.ajax({
      url:  url + '/profiles/' + username + '/house_representative/',
      type: 'GET',
    });
  },
  getSenators(username) {
    var url = config.APP.API_HOST + '/' + config.APP.API_NAMESPACE;
    return Ember.$.ajax({
      url:  url + '/profiles/' + username + '/senators/',
      type: 'GET',
    });
  },
  getNews() {
    return Ember.$.ajax({
      url:  'https://sagebrew.local.dev/v1/me/newsfeed/',
      type: 'GET'
    });
  },
  model () {
    return Ember.RSVP.hash({
      profile: this.currentUser.get("content").get('profile'),
      news:     this.getNews(),
      president: this.getPresident(this.currentUser.get("content").id),
      houserep: this.getHoseReps(this.currentUser.get("content").id),
      senators: this.getSenators(this.currentUser.get("content").id)
    });
  }
});
