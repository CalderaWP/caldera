import React from 'react';

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
const CalderaGrid = ({
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
