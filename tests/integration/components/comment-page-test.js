import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberapp/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | comment-page', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CommentPage />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <CommentPage>
        template block text
      </CommentPage>
    `);

    assert.dom().hasText('template block text');
  });
});
