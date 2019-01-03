import PropTypes from 'prop-types';
import React, {isValidElement,createElement,Fragment} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { fieldFactory, FieldAreaFactory } from '@caldera-labs/factory';
import { Column, Row, FieldArea } from '@caldera-labs/factory';
import classNames from 'classnames';

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
						{formRows.map(formRow => {
							if( React.isValidElement(formRow)){
								const {
									key,
									id
								} = formRow.props ? formRow.props : {};
								return createElement(Fragment, {
									key: key ? key : id ? id : 'this-is-bad'
								},formRow);
							}
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
														<FieldArea
															key={fieldId}
															field={field}
															onChange={newValue => {
																setFieldValue(
																	fieldId,
																	newValue,
																	true
																);
																onChange(values);
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
	onSubmit: PropTypes.func,
	onChange: PropTypes.func
};
const noop = () => {};
CalderaForm.defaultProps = {
	onChange: noop
}
