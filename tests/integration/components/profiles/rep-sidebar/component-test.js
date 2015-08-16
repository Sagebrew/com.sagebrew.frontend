import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('profiles/rep-sidebar', 'Integration | Component | profiles/rep sidebar', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{profiles/rep-sidebar}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#profiles/rep-sidebar}}
      template block text
    {{/profiles/rep-sidebar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
