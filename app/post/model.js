import Ember from 'ember';
import DS from 'ember-data';
import voteableModel from '../sagebrew/voteableModel';
export default voteableModel.extend({
  content: DS.attr(),
  created: DS.attr('date'),
  last_edited_on: DS.attr('date'),
  profile: DS.belongsTo('profile'),
  comments: Ember.computed('id', function() {
      return this.store.query('comment', {parentResourceId: this.get('id'), parentResourceType: "post"});
  })
//  comments: DS.hasMany('comment')
});
