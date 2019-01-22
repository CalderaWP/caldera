import React from 'react';
import { storiesOf } from '@storybook/react';
import { CalderaForm } from './CalderaForm';
import { formRows } from './columns.fixtures';

import { collectFieldValues } from '@calderawp/factory';

import { getValuesFromFormLayout } from './util/getValuesFromFormLayout';
import {emailField, textField} from "./fields.fixtures";
const form = {
	rows: [
		{
			rowId: 'r1',
			columns: [
				{
					fields: [emailField.fieldId],
					width: '1/2',
					columnId: '1aaaaa'
				},
				{
					fields: [textField.fieldId],
					width: '1/4',
					columnId: '1b'
				}
			]
		}
	],
	fields: [
		emailField,
		textField
	],
	conditionals :[
		{
			type: 'hide',
			rule: (fieldValues) => {
				return fieldValues[emailField.fieldId] === 'hide'
			},
			fields: [
				textField.fieldId
			]
		},

	]
};

storiesOf('CalderaForm', module).add('Forms', () => (
	<CalderaForm
		form={form}
		onSubmit={(values, actions) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				actions.setSubmitting(false);
			}, 1000);
		}}
	/>
));
