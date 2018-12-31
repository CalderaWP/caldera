'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var inputAttrs = ['autocomplete', 'autofocus', 'disabled', 'form', 'list', 'readonly', 'required', 'tabindex', 'type', 'value'];

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#Additional_attributes
var numberAttrs = ['step', 'min', 'max', 'readonly', 'placeholder'];
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#Additional_attributes
var emailAttrs = ['maxlength', 'min', 'multiple', 'pattern', 'placeholder', 'readonly', 'size', 'spellcheck'];
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#Attributes
var fieldSetAttrs = ['disabled', 'form', 'name'];

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option#Attributes
var selectAttrs = ['disabled', 'label', 'selected', 'value'];
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Additional_attributes
var checkboxAttrs = ['checked', 'value'];

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Additional_attributes
var radioAttrs = ['checked'];
/**
 *
 * @param {Object} attributes
 * @param {Array|string|null} allowed
 */
var parseAttributes = exports.parseAttributes = function parseAttributes(attributes) {
	var allowed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


	switch (allowed) {
		case 'number':
			allowed = [].concat(inputAttrs, numberAttrs);
			break;
		case 'fieldSet':
		case 'fieldset':
			allowed = [].concat(inputAttrs, fieldSetAttrs);
			break;
		case 'select':
		case 'dropdown':
			allowed = [].concat(inputAttrs, selectAttrs);
			break;
		case 'email':
			allowed = [].concat(inputAttrs, emailAttrs);
			break;
		case 'radio':
			allowed = [].concat(inputAttrs, radioAttrs);
			break;
		case 'checkbox':
			allowed = [].concat(inputAttrs, checkboxAttrs);
			break;
		case 'text':
		case 'default':
		case null:
			allowed = inputAttrs;
			break;
	};

	attributes = require('lodash.pick')(attributes, allowed);

	var transforms = {
		maxlength: 'maxLength',
		spellcheck: 'spellCheck'
	};
	Object.keys(transforms).forEach(function (attr) {
		if (attributes.hasOwnProperty(attr)) {
			attributes[transforms[attr]] = attributes[attr];
			delete attributes[attr];
		}
	});

	return attributes;
};