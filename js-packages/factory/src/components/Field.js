import React, {Fragment} from 'react';
import {fieldFactory} from '../factories/fieldFactory'

export const Field = ({
							   field, onChange,onBlur
						   }) => (
	<Fragment>{fieldFactory(field, onChange)}</Fragment>
);
