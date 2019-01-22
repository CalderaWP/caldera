import {FormTokenField, SelectControl} from '@wordpress/components';
import { BaseControl } from '@wordpress/components';
import React from "react";
import {fieldClassNames} from "../util";
import {SelectField} from '../SelectField/SelectField';
export const AutoCompleteField = (
	label,
	description,
	fieldId,
	placeholder,
	required,
	value,
	onChange,
	onBlur,
	options
) => {
	return (
		<BaseControl
			id={fieldId}
			label={label}
			help={description}
		>
			<FormTokenField
				className={fieldClassNames('autocomplete')}
				id={fieldId}
				value={ value }
				suggestions={ options }
				onChange={ tokens => onChange(tokens) }
				placeholder={placeholder}
			/>
		</BaseControl>
	);
};

AutoCompleteField.propTypes = SelectField.propTypes;
AutoCompleteField.defaultProps = SelectField.defaultProps;
