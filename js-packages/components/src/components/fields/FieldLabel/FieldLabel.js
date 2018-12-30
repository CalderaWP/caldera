import {
	labelClassNames
} from '../util';

import React from 'react'

export const FieldLabel = ( { fieldType, children, fieldId } ) => {
	return (
		<label
			htmlFor={fieldId}
			className={labelClassNames(fieldType)}
		>
			{children}
		</label>
	);
};

