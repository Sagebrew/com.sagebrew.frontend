import DS from 'ember-data';

export default DS.Model.extend({
  upvotes: DS.attr('number'),
  downvotes: DS.attr('number'),
  vote_count: DS.attr('number'),
  vote_type: DS.attr('boolean'),
});
