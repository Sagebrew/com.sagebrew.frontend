import DS from 'ember-data';
import voteableModel from '../sagebrew/voteableModel';
export default voteableModel.extend({
  content: DS.attr(),
  created: DS.attr('date'),
  last_edited_on: DS.attr('date'),
  profile: DS.belongsTo('profile'),
  parent_type: DS.attr(), //These don't really exist in the backend but giving this a shot.
  parent_id: DS.attr(), //These don't really exist in the backend but giving this a shot.

});
