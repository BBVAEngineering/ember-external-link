import Ember from 'ember';
import layout from '../templates/components/external-link';

const { Component } = Ember;

/**
 * This component is a shortcut of _blank HTML link.
 *
 * @example
 * {{#external-link href="http://foo.bar"}}
 *     Wow!
 * {{/external-link}}
 *
 * @example
 * {{#external-link "http://foo.bar"}}
 *     Wow!
 * {{/external-link}}
 *
 * @example
 * {{external-link "http://foo.bar"}}
 *
 * @extends Ember.Component
 */
export default Component.extend({

	layout,

	/**
	 * Component wrapper attributes.
	 *
	 * @property attributeBindings
	 * @type Array
	 */
	attributeBindings: ['href', 'target'],

	/**
	 * HTML tag.
	 *
	 * @property tagName
	 * @type String
	 * @default 'a'
	 */
	tagName: 'a',

	/**
	 * Link href attribute.
	 *
	 * @property href
	 * @type String
	 * @default ''
	 */
	href: '',

	/**
	 * Link target attribute.
	 *
	 * @property target
	 * @type String
	 * @default '_blank'
	 */
	target: '_blank'

}).reopenClass({
	positionalParams: ['href']
});
