import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('questions/question-detail', 'Integration | Component | questions/question detail', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{questions/question-detail}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#questions/question-detail}}
      template block text
    {{/questions/question-detail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
