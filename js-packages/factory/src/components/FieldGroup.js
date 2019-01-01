import React, { Fragment } from 'react';
import { fieldGroupFactory } from '../factories/fieldGroupFactory';

export const FieldGroup = ({
	field,
	onChange,
	onBlur,
	fieldErrors,
	fieldsTouch
}) => (
	<Fragment>
		{fieldGroupFactory(field, onChange, onBlur, fieldErrors, fieldsTouch)}
	</Fragment>
);
