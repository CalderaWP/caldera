export const defaultProcessorTypes = [
	{
		type: 'apiRequest',
		fields:  [
			{
				fieldId: 'requestURL',
				fieldType: 'input',
				html5type: 'url',
				required: true,
			},
			{
				fieldId: 'requestMethod',
				fieldType: 'select',
				label: 'Request Method',
				default: 'GET',
				options: [
					{ value: "GET", label: 'GET' },
					{ value: "POST", label: 'POST' },
				]
			}

		]
	},
	{
		type: 'redirect',
		fields: [
			{
				fieldType: 'input',
				html5type: 'string',
				value: '',
				label: 'From Name',
				fieldId: 'redirectFromName',
				description: 'Name Of Who The Email Is From',
				required: true
			},
			{
				fieldType: 'input',
				html5type: 'email',
				value: '',
				label: 'From email',
				fieldId: 'redirectFromEmail',
				description: 'Email Of Who The Email Is From',
				required: true
			},
			{
				fieldType: 'input',
				html5type: 'string',
				value: '',
				label: 'Recipient Name',
				fieldId: 'redirectRecipientName',
				description: 'Name Of Who The Email Is From',
				required: true
			},
			{
				fieldType: 'input',
				html5type: 'email',
				value: '',
				label: 'Recipient email',
				fieldId: 'redirectRecipientEmail',
				description: 'Email Of Who The Email Is From',
				required: true
			}
		]
	}
];
