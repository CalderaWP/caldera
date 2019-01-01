import PropTypes from 'prop-types';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { fieldFactory, fieldGroupFactory } from '@caldera-labs/factory';
import { Column, Row, FieldGroup } from '@caldera-labs/factory';
import classNames from 'classnames';

export const CalderaForm = ({ formRows, initialValues, onSubmit }) => {
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
						{formRows.map(formRow => {
							const { rowId, columns } = formRow;
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
													const { fieldId } = field;
													field.value =
														values[fieldId];
													return (
														<FieldGroup
															key={fieldId}
															field={field}
															onChange={newValue => {
																setFieldValue(
																	fieldId,
																	newValue,
																	true
																);
															}}
															onBlur={handleBlur}
															fieldErrors={errors}
															fieldsTouch={
																touched
															}
														/>
													);
												})}
											</Column>
										);
									})}
								</Row>
							);
						})}
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
	onSubmit: PropTypes.func
};
