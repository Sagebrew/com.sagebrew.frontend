import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions : {
     createComment() {
       var store = this.get('store');
       var content = this.controller.getProperties('commentConent');
       var comment = store.createRecord('comment', {
         content: content.commentConent,
         parent_id: this.get('parent').id,
         parent_type: this.get('parent').get('type'),
         profile: this.get('currentUser').id
       });
       comment.save();
     }
   }
});
