import DS from 'ember-data';

export default DS.Model.extend({
  created: DS.attr('date'),
  content: DS.attr(),
  profile: DS.belongsTo('profile')
});
