import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('posts/post-summary', 'Integration | Component | posts/post summary', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{posts/post-summary}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#posts/post-summary}}
      template block text
    {{/posts/post-summary}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
