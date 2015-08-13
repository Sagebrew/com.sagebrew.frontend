import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Component.extend({
  actions : {
     createPost() {
       var content = this.controller.getProperties('content');
       console.log(config);
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
       /*
       var post = this.store.createRecord('post', {
         content: data.content,
         profile: this.get('currentUser').username
       });
       post.save();
       */
     }
   }
});
