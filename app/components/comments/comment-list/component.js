import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleCommentAdd: function() {
      console.log("sup");
      this.toggleProperty('isAddingComment');
    }
  }
});
