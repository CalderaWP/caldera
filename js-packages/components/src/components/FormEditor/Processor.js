import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {CalderaForm} from '@calderawp/forms';
import {CalderaGrid} from "@calderawp/forms/src/components/CalderaForm";
export const Processor = (
{

}) => (
	<Fragment>
		<CalderaForm
			formRows={formRows}
			initialValues={initialValues}
			onSubmit={(
				//current values of all fields
				values,
				actions
			) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}, 1000);
			}}
			onChange={(values) => {
				console.log(values) //all field values
			}}
		/>

	</Fragment>
);


Processor.propTypes = {};


