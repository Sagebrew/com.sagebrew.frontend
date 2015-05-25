import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  html_content: DS.attr(),
  content: DS.attr(),
});
