import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions : {
     createPost() {
       var store = this.get('store');
       var content = this.controller.getProperties('content');
       var post = store.createRecord('post', {
         content: content.content,
         profile: this.get('profile')
       });
       post.save();
     }
   }
});
