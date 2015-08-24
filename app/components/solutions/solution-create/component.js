import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions : {
     createSolution() {
       var store = this.get('store');
       var data = this.controller.getProperties('content');
       var solution = store.createRecord('solution', {
         content: data.content,
         question_id: this.get('question').id
       });
       solution.save();
     }
   }
});
