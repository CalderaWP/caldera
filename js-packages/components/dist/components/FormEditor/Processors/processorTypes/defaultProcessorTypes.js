'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.defaultProcessorTypes = undefined;

var _autoResponder = require('./autoResponder');

var defaultProcessorTypes = exports.defaultProcessorTypes = [_autoResponder.autoResponder, {
	type: 'apiRequest',
	fields: [{
		fieldId: 'requestURL',
		fieldType: 'input',
		html5type: 'url',
		required: true
	}, {
		fieldId: 'requestMethod',
		fieldType: 'select',
		label: 'Request Method',
		default: 'GET',
		options: [{ value: "GET", label: 'GET' }, { value: "POST", label: 'POST' }]
	}]
}];