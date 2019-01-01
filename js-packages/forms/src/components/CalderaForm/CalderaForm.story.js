import React from 'react';
import { storiesOf } from '@storybook/react';
import { CalderaForm } from './CalderaForm';
import {formRows} from './columns.fixtures';
storiesOf('CalderaForm', module).add('Forms', () => (
	<CalderaForm
		formRows={formRows}
		initialValues={{}}
		onSubmit={(values,actions) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				actions.setSubmitting(false);
			}, 1000);
		}}
	/>
));

