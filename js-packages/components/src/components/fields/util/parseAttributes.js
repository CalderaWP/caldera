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
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#Attributes
const fieldSetAttrs = [
	'disabled',
	'form',
	'name',
];

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option#Attributes
const selectAttrs = [
	'disabled',
	'label',
	'selected',
	'value'
];
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Additional_attributes
const checkboxAttrs = [
	'checked',
	'value'
];
/**
 *
 * @param {Object} attributes
 * @param {Array|string|null} allowed
 */
export const parseAttributes = (attributes, allowed = null) => {

	switch (allowed) {
		case 'number':
			allowed = [...inputAttrs, ...numberAttrs];
			break;
		case 'fieldSet' :
		case 'fieldset' :
			allowed = [...inputAttrs, ...fieldSetAttrs];
			break;
		case 'select' :
		case 'dropdown' :
			allowed = [...inputAttrs, ...selectAttrs];
			break;
		case 'email' :
			allowed = [...inputAttrs, ...emailAttrs];
			break;
		case 'checkbox':
			allowed = [...inputAttrs,...checkboxAttrs];
			break;
		case 'text':
		case 'default':
		case null :
			allowed = inputAttrs;
			break;
	}
	;


	attributes = require('lodash.pick')(attributes, allowed);

	const transforms = {
		maxlength: 'maxLength',
		spellcheck: 'spellCheck'
	};
	Object.keys(transforms).forEach(attr => {
		if (attributes.hasOwnProperty(attr)) {
			attributes[transforms[attr]] = attributes[attr];
			delete attributes[attr];
		}
	});

	return attributes;
};