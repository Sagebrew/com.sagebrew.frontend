import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      profile: this.store.find('profile', params.username),
      posts: this.store.find('post', {profileId: params.username})
    });
  },
  actions : {
     createPost: function() {
       var data = this.controller.getProperties('content');
       var post = this.store.createRecord('post', {
         content: data.content,
         profile: this.get('currentUser').username
       });
       post.save();
     }

   }
});
