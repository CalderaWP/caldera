import FormClient from './FormClient';
describe('Form client -Decorates form fields', () => {
	const value = 'First field value';
	const fieldValues = {
		fld0: 'dsa',
		fld1: value,
		fld2: '4'
	};
	const form = {
		fieldValues
	};
	let submitHandler = jest.fn();
	beforeEach(() => {
		submitHandler = jest.fn();
	});

	it('Calls submit handler function', function() {
		const client = new FormClient(form, {
			submitHandler
		});
		client.submitForm();
		expect(submitHandler.mock.calls.length).toBe(1);
		expect(submitHandler.mock.calls[0][0]).toBe(fieldValues);
	});
});
