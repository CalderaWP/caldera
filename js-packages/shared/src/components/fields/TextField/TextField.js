import {TextControl} from '@wordpress/components';
import {parseAttributes,fieldClassNames,isValidHtml5type} from '../util';
import PropTypes from 'prop-types';
import React from 'react'

import {FieldLabel} from '../FieldLabel/FieldLabel'

export const TextField = ({
							  label,
							  description,
							  fieldId,
							  placeholder,
							  required,
							  html5type,
							  value,
							  onChange,
							  onBlur,
							  attributes
						  }) => {

	const fieldType = isValidHtml5type(html5type) ? html5type : 'text';
	const _attributes = parseAttributes(attributes,fieldType);
	return (
		<div className={fieldClassNames('text')}>
			<FieldLabel
				fieldId={fieldId}
			>
				{label}
			</FieldLabel>
			<TextControl
				id={fieldId}
				value={value}
				placeholder={placeholder}
				type={fieldType}
				onChange={onChange}
				onBlur={onBlur}
				help={description}
				{..._attributes}
			/>
		</div>
	)
}

TextField.propTypes = {
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

TextField.defaultProps = {
	onBlur: () => {
	},
	required: false,
	html5type: 'text'
};
