import React, {Fragment} from 'react';
import {fieldFactory} from '../factories/fieldFactory'

export const Fields = ({
							   field, onChange
						   }) => (
	<Fragment>{fieldFactory(field, onChange)}</Fragment>
);
