import {
	InputField,
	SelectField,
	isValidHtml5type,
	FieldSet,
	Message
} from '@caldera-labs/components';
import React, {Fragment} from 'react';


function messageObjectIsValid(messages){
	return 'object' === typeof messages && messages.hasOwnProperty('message');
}
const TheMessage = (messages, fieldId) => {
	return <Message
		message={{
			message: 'Hi Roy',
			error: false,
		}}
	/>;
}
export const fieldFactory = (field, onChange, onBlur) => {
	const {fieldType, label, attributes, options, fieldId, messages} = field;
	let Message;
	if( messageObjectIsValid(messages)){
		 Message = TheMessage(messages, fieldId);
	}
	switch (fieldType) {
		case 'checkbox':
		case 'checkboxes' :
			if ('checkboxes' === fieldType || fieldType.hasOwnProperty('options')) {
				return (
					<FieldSet
						fieldType={fieldType}
						legend={label}
						attributes={attributes}
					>
						{options.map(option => {
							const {
								value,
								label,
								description,
								attributes
							} = option;
							const fieldId = option.hasOwnProperty('id') ? option.id : `opt-${fieldId}-${option.value}`;
							return <InputField
								key={fieldId}
								fieldId={fieldId}
								value={value}
								label={label}
								description={description}
								html5type={'checkbox'}
								attributes={attributes}
								onChange={onChange}
							/>
						})}
						{ messageObjectIsValid(messages) &&
							<TheMessage/>
						}
					</FieldSet>
				);
			} else {
				return <InputField
					{...field} onChange={onChange}
				>
					{ messageObjectIsValid(messages) &&
						<TheMessage/>
					}
				</InputField>
			}
			break;
		case 'select':
		case 'dropdown':
			return <SelectField
				{...field}
				onChange={onChange}

			>
				{ messageObjectIsValid(messages) &&
					<TheMessage/>
				}
			</SelectField>;
			break;
		case 'text':
		case 'email':
		case 'number':
		case 'input':
		default:
			if (isValidHtml5type(fieldType)) {
				field.html5type = fieldType;
			} else {
				field.html5type = 'text';

			}
			return <InputField
				{...field}
				onChange={onChange}
			>

				{ messageObjectIsValid(messages) &&
					<TheMessage/>
				}
			</InputField>
			break;
	}
}
