import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
   return {
     'title': 'asdfasdfa',
     'content': '***',
   };
 },

 actions : {
    save: function() {
      var data = this.controller.getProperties('title', 'content');
      var question = this.store.createRecord('question', {
        title: data.title,
        content: data.content,
      });
    }
  }
});
