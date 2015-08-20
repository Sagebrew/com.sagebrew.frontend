import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions : {
    save() {
      var self = this;
      var data = this.controller.getProperties('title', 'content', 'tags');
      var question = this.get('store').createRecord('question', {
        title: data.title,
        content: data.content,
        tags: data.tags,
      });
      question.save().then(function(){
        self.sendAction('goToQuestion', question);
      });
    }
  }
});
