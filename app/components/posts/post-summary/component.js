import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleCommentAdd: function() {
      this.toggleProperty('isAddingComment');
    }
  }
});
