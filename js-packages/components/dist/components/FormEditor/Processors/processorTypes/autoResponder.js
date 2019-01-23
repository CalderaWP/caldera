'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.autoResponder = exports.AUTO_RESPONDER_PROCESSOR_TYPE = undefined;

var _ref;

var _forms = require('@calderawp/forms');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AUTO_RESPONDER_PROCESSOR_TYPE = exports.AUTO_RESPONDER_PROCESSOR_TYPE = 'autoResponder';
var autoResponder = exports.autoResponder = {
	type: AUTO_RESPONDER_PROCESSOR_TYPE,
	fields: [{
		fieldType: 'input',
		html5type: 'string',
		value: '',
		label: 'From Name',
		fieldId: 'autoResponderFromName',
		description: 'Name Of Who The Email Is From',
		required: true
	}, {
		fieldType: 'input',
		html5type: 'email',
		value: '',
		label: 'From email',
		fieldId: 'autoResponderFromEmail',
		description: 'Email Of Who The Email Is From',
		required: true
	}, {
		fieldType: 'input',
		html5type: 'string',
		value: '',
		label: 'Recipient Name',
		fieldId: 'autoResponderRecipientName',
		description: 'Name Of Who The Email Is From',
		required: true
	}, {
		fieldType: 'input',
		html5type: 'email',
		value: '',
		label: 'Recipient email',
		fieldId: 'autoResponderRecipientEmail',
		description: 'Email Of Who The Email Is From',
		required: true
	}, (_ref = {
		fieldType: 'select',
		value: true,
		label: 'HTML Mode',
		fieldId: 'autoResponderHtmlMode',
		description: 'HTML or Plain Text'
	}, _defineProperty(_ref, 'value', 'html'), _defineProperty(_ref, 'options', [{ value: 'html', label: 'HTML' }, { value: 'plain', label: 'Plain Text' }]), _ref), {
		fieldType: 'magic-richtext',
		value: '',
		otherCompletes: {},
		fieldCompletes: {},
		label: 'Message',
		fieldId: 'messageHtml'
	}, {
		fieldType: 'textarea',
		value: '',
		label: 'Message',
		fieldId: 'messagePlain'
	}],
	conditionals: [{
		type: 'show',
		rule: (0, _forms.createFieldRule)('is', 'autoResponderHtmlMode', 'html'),
		fields: ['messageHtml']
	}, {
		type: 'show',
		rule: (0, _forms.createFieldRule)('is', 'autoResponderHtmlMode', 'plain'),
		fields: ['messagePlain']
	}]
};