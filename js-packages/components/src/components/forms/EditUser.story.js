import React from 'react';
import { storiesOf } from '@storybook/react';
import { EditUser } from './EditUser';

storiesOf('EditUser', module).add(
	'No heading level set (h1 by default)',
	() => <EditUser>Header Component</EditUser>
);
