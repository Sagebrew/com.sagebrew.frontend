import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  tags: DS.attr()
});
