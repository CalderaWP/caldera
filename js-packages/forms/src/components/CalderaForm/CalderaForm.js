import PropTypes from 'prop-types';
import React, { isValidElement, createElement, Fragment } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { fieldFactory, FieldAreaFactory } from '@caldera-labs/factory';
import { Column, Row, FieldArea } from '@caldera-labs/factory';
import classNames from 'classnames';

//Do not move until it gets tests!
/**
 *
 * @param rows
 * @param onAnyChange Function that runs when any supplied field value changes. Current field values are passed to callback.
 * @param onAnyBlur Function that runs when any field inside of this layout is blurred. Current field values are passed to callback.
 * @param {*} fieldValues Current field values used in layout. {fieldId: fieldValue}
 * @param {*} fieldErrors Current field errors. {fieldId: 'Invalid!'}
 * @param {*} fieldTouched
 * @param {function} setFieldValue
 * @return {*}
 * @constructor
 */
const Layout = ({
	rows,
	onAnyChange,
	onAnyBlur,
	fieldValues,
	fieldErrors,
	fieldTouched,
	setFieldValue
}) => (
	<Fragment>
		{rows.map(row => {
			const { rowId, columns, render } = row;

			if (render) {
				return createElement(render, {
					...row,
					key: rowId
				});
			}

			return (
				<Row
					className={classNames('caldera-form-row')}
					key={rowId}
					id={rowId}
				>
					{columns.map(column => {
						const {
							padding,
							width,
							columnId,
							fields,
							render,
							key
						} = column;
						if (render) {
							return createElement(render, {
								...column,
								key: columnId
							});
						}
						return (
							<Column
								key={columnId}
								columnId={columnId}
								width={width}
								padding={padding}
							>
								{fields.map(field => {
									if (!field) {
										return;
									}
									const { fieldId, render, key } = field;
									field.value = fieldValues[fieldId];

									const _key = render ? key : fieldId;
									return (
										<FieldArea
											render={render}
											key={_key}
											field={field}
											onChange={newValue => {
												setFieldValue(
													fieldId,
													newValue,
													true
												);
												onAnyChange(fieldValues);
											}}
											onBlur={onAnyBlur}
											fieldErrors={fieldErrors}
											fieldsTouch={fieldTouched}
										/>
									);
								})}
							</Column>
						);
					})}
				</Row>
			);
		})}
	</Fragment>
);

Layout.propTypes = {
	rows: PropTypes.array,
	onAnyChange: PropTypes.func,
	onAnyBlur: PropTypes.func,
	fieldValues: PropTypes.object,
	fieldErrors: PropTypes.object,
	fieldTouched: PropTypes.object,
	setFieldValue: PropTypes.func
};

const _noop = () => {};
Layout.defaultProps = {
	onAnyChange: _noop,
	onAnyBlur: _noop,
	setFieldValue: _noop,
	fieldValues: {}
};

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
						<Layout
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
	onBlur: PropTypes.func,
	initialValues: PropTypes.object
};

const noop = () => {};
CalderaForm.defaultProps = {
	onChange: noop,
	onBlur: noop
};
