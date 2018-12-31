import React, {Fragment} from 'react';
import {Row, rowPropTypes} from './Row';
import PropTypes from 'prop-types';

export const Rows = ({
						 rows, onChange, onBlur, className
					 }) => (
	<Fragment>
		{rows.forEach(row => <Row
			key={row.rowId}
			{...row}
			onChange={onChange}
			onBlur={onBlur}/>)
		}
	</Fragment>
);

Rows.propTypes = {
	rows: PropTypes.arrayOf(PropTypes.shape(rowPropTypes)),
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func,
	className: PropTypes.string
};
