import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  upvotes: DS.attr(),
  downvotes: DS.attr(),
  vote_count: DS.attr(),
  vote_type: DS.attr(),
  didVoteUp: Ember.computed('vote_type', function() {
    if (this.get('vote_type') === true) {
      return true;
    } else {
      return false;
    }
  }),
  didVoteDown: Ember.computed('vote_type', function() {
    if (this.get('vote_type') === false) {
      return true;
    } else {
      return false;
    }
  }),
});
