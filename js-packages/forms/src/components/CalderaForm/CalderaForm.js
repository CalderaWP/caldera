import PropTypes from 'prop-types';
import React, {isValidElement,createElement,Fragment} from 'react';
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
const Layout = ({rows,onAnyChange,onAnyBlur,fieldValues,fieldErrors,fieldTouched,setFieldValue}) => (
	<Fragment>
		{rows.map(row => {
			if( React.isValidElement(row)){
				const {
					key,
					rowId
				} = row.props ? row.props : {};
				return createElement(Fragment, {
					key: key ? key : rowId ? rowId : 'row-without-key-or-rowId'
				},row);
			}
			const { rowId, columns } = row;
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
							fields
						} = column;
						return (
							<Column
								key={columnId}
								columnId={columnId}
								width={width}
								padding={padding}
							>
								{fields.map(field => {
									if( React.isValidElement(field)){
										const {
											key,
											fieldId
										} = field.props ? field.props : {};
										return createElement(Fragment, {
											key: key ? key : fieldId ? fieldId : 'field-without-key-or-fieldId'
										},field);
									}

									const { fieldId } = field;
									field.value = fieldValues[fieldId];
									return (
										<FieldArea
											key={fieldId}
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
	setFieldValue: PropTypes.func,
};

const _noop = () => {};
Layout.defaultProps = {
	onAnyChange: _noop,
	onAnyBlur: _noop,
	setFieldValue: _noop
};



export const CalderaForm = ({ formRows, initialValues, onSubmit,onChange }) => {
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
	onBlur: noop,
};
