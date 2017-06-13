import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const href = 'http://foo.bar';
const text = 'Wow!';
let $node;

moduleForComponent('external-link', 'Integration | Component | external-link', {
	integration: true,

	beforeEach() {
		this.setProperties({ href, text });
	}
});

test('it has target _blank', function(assert) {
	this.render(hbs `{{external-link href=href}}`);
	$node = this.$('a');

	assert.equal($node.attr('target'), '_blank');
});

test('it renders external-link with block', function(assert) {
	// Render
	this.render(hbs `{{#external-link href=href}}{{text}}{{/external-link}}`);
	$node = this.$('a');

	assert.equal($node.text().trim(), text);
	assert.equal($node.attr('href'), href);
});

test('it renders external-link with block and position param', function(assert) {
	// Render
	this.render(hbs `{{#external-link href}}{{text}}{{/external-link}}`);
	$node = this.$('a');

	assert.equal($node.text().trim(), text);
	assert.equal($node.attr('href'), href);
});

test('it renders external-link without block and positional param', function(assert) {
	// Render
	this.render(hbs `{{external-link href}}`);
	$node = this.$('a');

	assert.equal($node.text().trim(), href);
	assert.equal($node.attr('href'), href);
});
