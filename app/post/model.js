import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  created: DS.attr('date'),
  last_edited_on: DS.attr('date'),
  upvotes: DS.attr('number'),
  downvotes: DS.attr('number'),
  vote_count: DS.attr('number'),
  vote_type: DS.attr('boolean'),
  view_count: DS.attr('number'),
  profile: DS.belongsTo('profile'),
});
