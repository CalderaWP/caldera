import {
	RemotePost,
	TextAreaField,
	ToggleField,
	RadioField,
	FieldWrapper,
	FieldSet,
	SelectField,
	InputField
} from '@calderawp/components';

describe('exports', () => {
	test('RemotePost', () => {
		expect(typeof RemotePost).toBe('function');
	});
	test('TextAreaField', () => {
		expect(typeof TextAreaField).toBe('function');
	});

	test('ToggleField', () => {
		expect(typeof ToggleField).toBe('function');
	});
	test('RadioField', () => {
		expect(typeof RadioField).toBe('function');
	});
	test('FieldWrapper', () => {
		expect(typeof FieldWrapper).toBe('function');
	});

	test('RemotePost', () => {
		expect(typeof RemotePost).toBe('function');
	});
	test('FieldSet', () => {
		expect(typeof FieldSet).toBe('function');
	});
	test('SelectField', () => {
		expect(typeof SelectField).toBe('function');
	});
	test('InputField', () => {
		expect(typeof InputField).toBe('function');
	});
});
