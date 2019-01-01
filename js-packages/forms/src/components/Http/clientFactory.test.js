import FormClient from './FormClient';
import {formClientFactory} from './clientFactory';
describe( '', () => {
	beforeEach(() => {
		fetch.resetMocks()
	});

	const value = 'First field value';
	const fieldValues = {
		fld0: 'dsa',
		fld1: value,
		fld2: '4'
	};
	const formId = 'cf1';
	const form = {
		id: formId,
		fieldValues
	};
	const apiRootUri = 'https://site.com/wp-json/caldera/';

	it( 'Adds default submit handler', () => {
		const client = formClientFactory(form,apiRootUri,'caldera',{});
		client.submitForm();
		expect(fetch.mock.calls.length).toBe(1);
	});
});
