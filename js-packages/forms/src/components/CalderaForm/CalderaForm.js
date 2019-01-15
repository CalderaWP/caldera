import PropTypes from 'prop-types';
import React, { isValidElement, createElement, Fragment } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { CalderaGrid } from './CalderaGrid';
export const CalderaForm = ({
	formRows,
	initialValues,
	onSubmit,
	onChange
}) => {
	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				render={({
					errors,
					status,
					touched,
					isSubmitting,
					handleChange,
					handleBlur,
					setFieldValue,
					values
				}) => (
					<Form>
						<CalderaGrid
							rows={formRows}
							onAnyChange={onChange}
							onAnyBlur={handleBlur}
							fieldValues={values}
							setFieldValue={setFieldValue}
							fieldErrors={errors}
							fieldTouched={touched}
						/>
						<input
							type="submit"
							className={'caldera-forms-submit'}
							disabled={isSubmitting}
							value={'Click Button'}
						/>
					</Form>
				)}
			/>
		</div>
	);
};

CalderaForm.propTypes = {
	formRows: PropTypes.array,
	initialValues: PropTypes.object,
	onSubmit: PropTypes.func,
	onChange: PropTypes.func,
	onBlur: PropTypes.func
};

const noop = () => {};
CalderaForm.defaultProps = {
	onChange: noop,
	onBlur: noop
};
