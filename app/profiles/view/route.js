import Ember from 'ember';
import config from '../../config/environment';

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
  model(params) {
    return Ember.RSVP.hash({
      profile: this.store.find('profile', params.username),
      posts: this.store.find('post', {profileId: params.username}),
      president: this.getPresident(params.username),
      housereps: this.getHoseReps(params.username),
      senators: this.getSenators(params.username)
    });
  }
});
