import React, {Fragment} from 'react';
import {fieldFactory} from '../factories/fieldFactory'

export const FieldGroup = ({
							   field, onChange
						   }) => (
	<Fragment>{fieldFactory(field, onChange)}</Fragment>
);
