import DS from 'ember-data';
import voteableModel from '../sagebrew/voteableModel';
export default voteableModel.extend({
  title: DS.attr(),
  created: DS.attr('date'),
  content: DS.attr(),
  tags: DS.attr(),
  profile: DS.belongsTo('profile'),
  solutions: DS.hasMany({ async: true }, 'solutions')
});
