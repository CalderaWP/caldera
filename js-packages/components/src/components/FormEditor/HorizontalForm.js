import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CalderaForm } from '@calderawp/forms';

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

const _noop = () => {};
HorizontalForm.defaultProps = {
	fields: {},
	onSubmit: _noop,
	onChange: _noop,
	initialValues: {}
};
