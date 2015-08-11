import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  created: DS.attr('date'),
  username: DS.attr(),
  first_name: DS.attr(),
  last_name: DS.attr(),
  profile_pic: DS.attr(),
  wallpaper_pic: DS.attr(),
  reputation: DS.attr(),
  full_name: Ember.computed('first_name', 'last_name', function() {
    return this.get('first_name') + ' ' + this.get('last_name');
  }),
  user: DS.belongsTo('user')
});
