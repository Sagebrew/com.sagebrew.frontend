import DS from 'ember-data';
import voteableModel from '../sagebrew/voteableModel';
export default voteableModel.extend({
  created: DS.attr('date'),
  content: DS.attr(),
  profile: DS.belongsTo('profile'),
  question_id: DS.attr() //Not really a value. Used for creation.
});
