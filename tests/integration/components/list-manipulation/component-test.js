import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('list-manipulation', 'Integration | Component | list manipulation', {
	integration: true
});

test('sort key and direction can be controlled', function (assert) {
	let list = [
		{id: 1, name: 'Manchester'},
		{id: 2, name: 'United'},
		{id: 3, name: 'Forever'}
	];
	this.set('list', list);

	this.render(hbs`
		{{#list-manipulation
			list=list
			sortKey=sortKey
			sortDesc=sortDesc
			as |sortedList sort|}}
			<button {{action sort "name" true}}>name</button>
			<ul class="test">
				{{#each sortedList as |item|}}
					<li>{{item.name}}</li>
				{{/each}}
			</ul>
		{{/list-manipulation}}
	`);

	// Shortcut to get the name of each item in the list by index.
	const getName = index => this.$('.test li').eq(index).text().trim();

	this.set('sortKey', 'id');
	this.set('sortDesc', false);
	assert.equal(getName(0), list[0].name, 'id:asc');
	assert.equal(getName(2), list[2].name);

	this.set('sortDesc', true);
	assert.equal(getName(0), list[2].name, 'id:desc');
	assert.equal(getName(2), list[0].name);

	this.set('sortKey', 'name');
	this.set('sortDesc', false);
	assert.equal(getName(0), 'Forever', 'name:asc');
	assert.equal(getName(2), 'United');

	this.set('sortDesc', true);
	assert.equal(getName(0), 'United', 'name:desc');
	assert.equal(getName(2), 'Forever');

	this.$('button').click();
	assert.equal(getName(0), 'Forever', 'action works');
	assert.equal(getName(2), 'United');

	this.$('button').click();
	assert.equal(getName(0), 'United', 'clicking action again reverses');
	assert.equal(getName(2), 'Forever');
});
