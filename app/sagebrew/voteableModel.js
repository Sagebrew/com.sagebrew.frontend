import DS from 'ember-data';

export default DS.Model.extend({
  upvotes: DS.attr(),
  downvotes: DS.attr(),
  vote_count: DS.attr(),
  vote_type: DS.attr(),
});
