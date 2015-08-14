import Ember from 'ember';

export default Ember.Component.extend({
  model: function() {
   return {
     'title': 'Acd',
     'content': 'asdfasdfsadf',
     'tags': 'zxcvzxcvzxcv'
   };
 },

 actions : {
    save() {
      var data = this.controller.getProperties('title', 'content', 'tags');
      var question = this.store.createRecord('question', {
        title: data.title,
        content: data.content,
        tags: data.tags,
      });
      question.save();

    }
  }
});
