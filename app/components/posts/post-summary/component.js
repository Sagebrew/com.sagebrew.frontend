import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Component.extend({
  actions: {
    toggleCommentAdd: function() {
      this.toggleProperty('isAddingComment');
    }
  }
});
