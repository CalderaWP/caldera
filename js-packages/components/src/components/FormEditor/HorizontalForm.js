import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CalderaForm } from '@calderawp/forms';

/**
 * Displays a form, one field per row
 *
 * @param fields
 * @param initialValues
 * @param onClose
 * @param onChange
 * @param instanceId
 * @return {*}
 * @constructor
 */
export const HorizontalForm = ({
	fields,
	initialValues,
	onClose,
	onChange,
	instanceId
}) => {
	const rows = [];
	let i = 0;
	fields.forEach(field => {
		rows.push({
			rowId: `${instanceId}-${i}`,
			columns: [
				{
					columnId: `c-${instanceId}-${i}`,
					fields: [field],
					width: '1'
				}
			]
		});
		i++;
	});
	return (
		<Fragment>
			<CalderaForm
				fields={fields}
				formRows={rows}
				initialValues={initialValues}
				onSubmit={onClose}
				onChange={onChange}
			/>
		</Fragment>
	);
};

HorizontalForm.propTypes = {
	fields: PropTypes.array,
	initialValues: PropTypes.object,
	onSubmit: PropTypes.func,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	onClose: PropTypes.func,
	initialValues: PropTypes.object
};

HorizontalForm.defaultProps = {
	fields: {},
	initialValues: {}
};
