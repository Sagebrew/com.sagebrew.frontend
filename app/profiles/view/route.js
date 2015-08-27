import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      profile: this.store.find('profile', params.username),
      posts: this.store.query('post', {profileId: params.username}),
    });
  },
  refreshPosts() {
    console.log("YEAH");
  },
  actions : {
    refreshPosts() {
      console.log("YEAH");
    }
  }
});
