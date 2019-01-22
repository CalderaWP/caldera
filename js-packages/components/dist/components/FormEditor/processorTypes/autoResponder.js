'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
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
	}, {
		fieldType: 'select',
		value: true,
		label: 'HTML Mode',
		fieldId: 'autoResponderHtmlMode',
		description: 'HTML or Plain Text',
		options: [{ value: true, label: 'HTML' }, { value: false, label: 'Plain Text' }]
	}, {
		fieldType: 'magic-richtext',
		value: '',
		label: 'Message',
		fieldId: 'messageHtml'
	}, {
		fieldType: 'textarea',
		value: '',
		label: 'Message',
		fieldId: 'messagePlain'
	}],
	conditionals: [{
		type: 'hide',
		rule: function rule(fieldValues) {
			var html = fieldValues.autoResponderHtmlMode;
			return !html;
		},
		fields: ['messageHtml']
	}, {
		type: 'hide',
		rule: function rule(fieldValues) {
			var html = fieldValues.autoResponderHtmlMode;
			return html;
		},
		fields: ['messagePlain']
	}]
};