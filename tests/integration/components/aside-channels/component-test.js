import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('aside-channels', 'Integration | Component | aside channels', {
	integration: true
});

test('it renders', function (assert) {
	// Set any properties with this.set('myProperty', 'value');
	// Handle any actions with this.on('myAction', function(val) { ... });

	this.render(hbs`{{aside-channels}}`);
	assert.equal(1, 1);

	// assert.equal(this.$().text().trim(), '');

	// // Template block usage:
	// this.render(hbs`
	// 	{{#aside-channels}}
	// 		template block text
	// 	{{/aside-channels}}
	// `);

	// assert.equal(this.$().text().trim(), 'template block text');
});
