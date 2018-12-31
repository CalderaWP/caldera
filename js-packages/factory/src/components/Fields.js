import React, {Fragment} from 'react';
import {Field} from './Field';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export const Fields = ({
						   fields, onChange, onBlur, className
					   }) => (
	<div className={classNames('caldera-fields-wrapper',className)}>
		{fields.forEach(field => <Field
			key={field.fieldId}
			{...field}
			onChange={onChange}
			onBlur={onBlur}/>)
		}
  </div>
);

Fields.propTypes = {
	field: PropTypes.shape({
		fieldId: PropTypes.string.isRequired,
		//input propTypes?
	}),
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func,
	className: PropTypes.string
};
