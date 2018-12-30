import {fieldClassNames} from '../util';
import PropTypes from 'prop-types';
import React from 'react'

export const FieldWrapper = ({fieldType, children}) => {
	return (
		<div className={fieldClassNames(fieldType)}>
			{children}
		</div>
	);
};

FieldWrapper.propTypes = {
	fieldType: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

