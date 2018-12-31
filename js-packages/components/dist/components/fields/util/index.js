'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fieldWrapperClassNames = exports.fieldSetClassNames = exports.isValidHtml5type = exports.toBoolean = exports.addOrRemoveFromArray = exports.labelClassNames = exports.fieldClassNames = exports.parseAttributes = undefined;

var _parseAttributes = require('./parseAttributes');

var _fieldClassNames = require('./fieldClassNames');

var _labelClassNames = require('./labelClassNames');

var _fieldSetClassNames = require('./fieldSetClassNames');

var _fieldWrapperClassNames = require('./fieldWrapperClassNames');

/**
 * Checks if a given input type is an acceptable HTML5 input type
 *
 * @param {String} type
 * @returns {boolean}
 */
var isValidHtml5type = function isValidHtml5type(type) {
	return ['text', 'email', 'number', 'date', 'datetime', 'password', 'submit', 'reset', 'checkbox', 'hidden'].includes(type);
};

/**
 * Remove a value from an array if present, if not present, add it
 *
 * @param {String|number} value Value to add or remove
 * @param {Array} array Array to mutate
 * @return {*}
 */
var addOrRemoveFromArray = function addOrRemoveFromArray(value, array) {
	var index = array.indexOf(value);
	if (index !== -1) {
		array.splice(index, 1);
	} else {
		array.push(value);
	}
	return array;
};

/**
 * Cast a boolean or boolean like to a true or false
 *
 * @param {Mixed} value Value to cast
 * @return {boolean}
 */
var toBoolean = function toBoolean(value) {
	switch (value) {
		case true:
		case 'true':
		case 1:
		case '1':
		case 'on':
		case 'yes':
			return true;
		default:
			return false;
	}
};

exports.parseAttributes = _parseAttributes.parseAttributes;
exports.fieldClassNames = _fieldClassNames.fieldClassNames;
exports.labelClassNames = _labelClassNames.labelClassNames;
exports.addOrRemoveFromArray = addOrRemoveFromArray;
exports.toBoolean = toBoolean;
exports.isValidHtml5type = isValidHtml5type;
exports.fieldSetClassNames = _fieldSetClassNames.fieldSetClassNames;
exports.fieldWrapperClassNames = _fieldWrapperClassNames.fieldWrapperClassNames;