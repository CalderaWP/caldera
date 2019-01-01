import {
	InputField,
	SelectField,
	RadioField,
	isValidHtml5type,
	FieldSet,
} from '@caldera-labs/components';
import React from 'react';


export const fieldFactory = (field, onChange, onBlur) => {
	const {fieldType, label, attributes, options, fieldId, messages} = field;

	switch (fieldType) {
		case 'checkboxGroup' :
		case 'checkboxes' :
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
							id={fieldId}
							value={value}
							label={label}
							description={description}
							html5type={'checkbox'}
							attributes={attributes}
							onChange={onChange}
						/>
					})}
				</FieldSet>
			);
			break;
		case 'radio':
			return <RadioField
				{...field}
				onChange={onChange}
			/>;
		case 'select':
		case 'dropdown':
			return <SelectField
				{...field}
				onChange={onChange}
			/>;
			break;
		case 'text':
		case 'email':
		case 'number':
		case 'input':
		default:
			if (isValidHtml5type(fieldType)) {
				if (field.html5type !== fieldType) {
					field = { ...field, html5type: fieldType }
				}
			} else {
				field.html5type = 'text';

			}
			return <InputField
				{...field}
				onChange={onChange}
			/>
			break;
	}
}
