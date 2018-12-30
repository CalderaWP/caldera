import PropTypes from 'prop-types';
import React from 'react'

import {parseAttributes,fieldClassNames,isValidHtml5type} from '../util';
import {FieldLabel} from '../FieldLabel/FieldLabel';
import {FieldWrapper} from '../FieldWrapper/FieldWrapper';
import {Select} from '../controls/Select'
export  const SelectField = (props) => {
	let {
		attributes,
		label,
		fieldId
	} = props;
	attributes = parseAttributes(attributes,'select');
	return (
		<FieldWrapper
			fieldType={'select'}
		>
			<FieldLabel
				fieldId={fieldId}
			>
				{label}
			</FieldLabel>
			<Select
				{...props}
			/>
		</FieldWrapper>
	)
};


SelectField.propTypes = {
	label: PropTypes.string,
	description: PropTypes.string,
	fieldId: PropTypes.string,
	required: PropTypes.bool,
	multiple: PropTypes.bool,
};

SelectField.defaultProps = {
	required: false,
	multiple: false,
};
