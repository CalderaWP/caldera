const inputAttrs = [
	'autocomplete',
	'autofocus',
	'disabled',
	'form',
	'list',
	'readonly',
	'required',
	'tabindex',
	'type',
	'value'
];

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#Additional_attributes
const numberAttrs = [
	'step',
	'min',
	'max',
	'readonly',
	'placeholder'
];
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#Additional_attributes
const emailAttrs = [
	'maxlength',
	'min',
	'multiple',
	'pattern',
	'placeholder',
	'readonly',
	'size',
	'spellcheck'
];

/**
 *
 * @param {Object} attributes
 * @param {Array|string|null} allowed
 */
export const parseAttributes = ( attributes, allowed = null ) => {

	switch (allowed) {
		case 'number':
			allowed = [...inputAttrs,...numberAttrs];
			break;
		case 'email' :
			allowed = [...inputAttrs,...emailAttrs];
			break;
		case 'default':
		case null :
			allowed = inputAttrs;
			break;
	};

	return require('lodash.pick')(attributes,allowed);
};
