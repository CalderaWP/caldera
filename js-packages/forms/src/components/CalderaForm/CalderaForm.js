import PropTypes from 'prop-types';
import React, {isValidElement,createElement,Fragment} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { fieldFactory, FieldAreaFactory } from '@caldera-labs/factory';
import { Column, Row, FieldArea } from '@caldera-labs/factory';
import classNames from 'classnames';

export const Layout = ({formRows,onChange,handleBlur,values,errors,touched,setFieldValue}) => (
	<Fragment>
		{formRows.map(formRow => {
			function ifComponentElseIterateOn(ifComponent, elseLogic) {

			}
			if( React.isValidElement(formRow)){
				const {
					key,
					rowId
				} = formRow.props ? formRow.props : {};
				return createElement(Fragment, {
					key: key ? key : rowId ? rowId : 'row-without-key-or-rowId'
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

						if( React.isValidElement(column)){
							const {
								key,
								columnId
							} = column.props ? column.props : {};
							return createElement(Fragment, {
								key: key ? key : columnId ? columnId : 'column-without-key-or-columnId'
							},column);
						}
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
	</Fragment>
);


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
							formRows={formRows}
							onChange={onChange}
							onBlur={handleBlur}
							values={values}
							setFieldValue={setFieldValue}
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
	onChange: PropTypes.func
};
const noop = () => {};
CalderaForm.defaultProps = {
	onChange: noop
}
