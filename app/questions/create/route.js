import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
     goToQuestion: function(question){
       console.log("sup b");
       this.transitionTo('question.view', question);
     }
   }
});
