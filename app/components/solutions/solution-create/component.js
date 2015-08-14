import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
     createSolution() {
       var data = this.controller.getProperties('content');
       var solution = this.store.createRecord('solution', {
         content: data.content,
       });
       solution.save();
     }
   }
});
