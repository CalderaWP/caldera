import {parseAttributes,fieldClassNames,isValidHtml5type} from '../util';
import PropTypes from 'prop-types';
import React from 'react'

import {FieldLabel} from '../FieldLabel/FieldLabel'
import {FieldWrapper} from '../FieldWrapper/FieldWrapper'
import {Input} from '../controls/Input';
export const InputField = ({
							  label,
							  description,
							  fieldId,
							  placeholder,
							  required,
							  html5type,
							  value,
							  onChange,
							  onBlur,
							  attributes,
	children
						  }) => {

	const fieldType = isValidHtml5type(html5type) ? html5type : 'text';
	const _attributes = parseAttributes(attributes,fieldType);
	return (
		<FieldWrapper
			fieldType={fieldType}
		>
			<FieldLabel
				fieldId={fieldId}
			>
				{label}
			</FieldLabel>
			<Input
				fieldId={fieldId}
				value={value}
				placeholder={placeholder}
				type={fieldType}
				onChange={onChange}
				onBlur={onBlur}
				help={description}
				attributes={_attributes}
			/>
			{children}
		</FieldWrapper>
	)
};

InputField.propTypes = {
	label: PropTypes.string,
	description: PropTypes.string,
	fieldId: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	html5type: PropTypes.string,
	attributes: PropTypes.object,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array
	]),
	onChange: PropTypes.func,
	onBlur: PropTypes.func
};

InputField.defaultProps = {
	onBlur: () => {
	},
	required: false,
	html5type: 'text'
};
