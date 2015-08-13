import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('solutions/solution-summary', 'Integration | Component | solutions/solution summary', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{solutions/solution-summary}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#solutions/solution-summary}}
      template block text
    {{/solutions/solution-summary}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
