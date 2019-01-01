import React from 'react';
import { storiesOf } from '@storybook/react';
import { CalderaForm } from './CalderaForm';
import { formRows } from './columns.fixtures';

import { collectFieldValues } from '@caldera-labs/factory';

import { getValuesFromFormLayout } from './util/getValuesFromFormLayout';

const initialValues = getValuesFromFormLayout(formRows);
storiesOf('CalderaForm', module).add('Forms', () => (
	<CalderaForm
		formRows={formRows}
		initialValues={initialValues}
		onSubmit={(values, actions) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				actions.setSubmitting(false);
			}, 1000);
		}}
	/>
));
