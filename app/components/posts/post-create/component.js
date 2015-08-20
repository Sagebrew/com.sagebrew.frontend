import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions : {
     createPost() {
       var store = this.get('store');
       var content = this.controller.getProperties('content');
       //console.log(config);
        /*
       return Ember.$.ajax({
         url:  'https://sagebrew.local.dev/v1/me/',
         type: 'GET'
       }).then(function(response) {
           console.log(response);
           Ember.run(function() {
             return _this.container.lookup('service:store').find('user', response.username).then(user => _this.get('currentUser').set('content', user) && user);
           });

       }, function(xhr, status, error) {
         Ember.run(function() {
           reject(xhr.responseText);
         });
       });
       */
       var post = store.createRecord('post', {
         content: content.content,
         profile: this.get('profile')
       });
       post.save();
     }
   }
});
