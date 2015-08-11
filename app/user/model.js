import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  first_name: DS.attr(),
  last_name: DS.attr(),
  profile_pic: DS.attr(),
  wallpaper_pic: DS.attr(),
});
