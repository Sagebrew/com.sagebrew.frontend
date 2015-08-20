import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions : {
    save() {
      var store = this.get('store')
      var data = this.controller.getProperties('title', 'content', 'tags');
      var question = store.createRecord('question', {
        title: data.title,
        content: data.content,
        tags: data.tags,
      });
      question.save();
    }
  }
});
