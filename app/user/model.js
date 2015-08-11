import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  username: DS.attr(),
  first_name: DS.attr(),
  last_name: DS.attr(),
//  profile: DS.belongsTo({ async: true }, 'profile')
});
