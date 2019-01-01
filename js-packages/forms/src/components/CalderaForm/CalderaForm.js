import PropTypes from 'prop-types';
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { fieldFactory, fieldGroupFactory } from '@caldera-labs/factory';
import {Column,Row,FieldGroup} from '@caldera-labs/factory';
import classNames from "classnames";

export const CalderaForm = ({ formRows, initialValues,onChange,onBlur,onSubmit }) => {
	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				render={({ errors, status, touched, isSubmitting }) => (
					<Form>
						{formRows.map( (formRow ) => {
							const {
								rowId,
								columns
							} = formRow;
								return(
									<Row
										className={classNames('caldera-form-row')}
										onChange={onChange}
										onBlur={onBlur}
										key={rowId}
										id={rowId}
									>
										{columns.map( column => {
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
														{fields.map( field  => {
															const {
																fieldId
															} = field;
															return (
																<FieldGroup
																	key={fieldId}
																	field={field}
																	onChange={onChange}
																	onBlur={onBlur}
																	fieldErrors={errors}
																	fieldsTouch={touched}
																/>
															)
														})}
													</Column>
												)
										})}
									</Row>
								)


						})}
						<button type="submit" disabled={isSubmitting}>
							Click Button
						</button>
					</Form>
				)}
			/>
		</div>
	);
};
