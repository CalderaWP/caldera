export const AUTO_RESPONDER_PROCESSOR_TYPE = 'autoResponder';
export const autoResponder = {
	type: AUTO_RESPONDER_PROCESSOR_TYPE,
	fields: [
		{
			fieldType: 'input',
			html5type: 'string',
			value: '',
			label: 'From Name',
			fieldId: 'autoResponderFromName',
			description: 'Name Of Who The Email Is From',
			required: true
		},
		{
			fieldType: 'input',
			html5type: 'email',
			value: '',
			label: 'From email',
			fieldId: 'autoResponderFromEmail',
			description: 'Email Of Who The Email Is From',
			required: true
		},
		{
			fieldType: 'input',
			html5type: 'string',
			value: '',
			label: 'Recipient Name',
			fieldId: 'autoResponderRecipientName',
			description: 'Name Of Who The Email Is From',
			required: true
		},
		{
			fieldType: 'input',
			html5type: 'email',
			value: '',
			label: 'Recipient email',
			fieldId: 'autoResponderRecipientEmail',
			description: 'Email Of Who The Email Is From',
			required: true
		},
		{
			fieldType: 'toggle',
			value: true,
			label: 'HTML Mode',
			fieldId: 'autoResponderHtmlMode',
			description: 'HTML or Plain Text',
		},
		{
			fieldType: 'magic-richtext',
			value: '',
			label: 'Message',
			fieldId: 'messageHtml',
		},
		{
			fieldType: 'textarea',
			value: '',
			label: 'Message',
			fieldId: 'messagePlain',
		}
	],
	conditionals: [
		{
			type: 'hide',
			rule: (fieldValues) => {
				return fieldsValues.autoResponderHtmlMode;
			},
			fields: [
				'messageHtml'
			]
		},
		{
			type: 'show',
			rule: (fieldValues) => {
				return !fieldsValues.autoResponderHtmlMode;
			},
			fields: [
				'messagePlain'
			]
		}
	]
}