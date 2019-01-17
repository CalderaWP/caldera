import {ConditionalState} from './ConditionalState';

describe( 'ConditionalState get value', () => {

	it( 'gets value when valid and has value', () => {
		const state = new ConditionalState({
			x:7
		});
		expect(state.getValue('x')).toEqual(7);
	});

	it( 'Does not get value when valid field ID but no value', () => {
		const state = new ConditionalState({
			x:null
		});
		expect(state.getValue('x')).toEqual(null);
	});

	it( 'Does not get value when not valid field ID ', () => {
		const state = new ConditionalState({
			x:null
		});
		expect(state.getValue('y')).toEqual(null);
	});
});

describe( 'ConditionalState set value', () => {
	it( 'sets value when valid field id', () => {
		const state = new ConditionalState({
			x:7
		});
		state.setValue('x', 'five' );
		expect(state.getValue('x')).toEqual('five');
	});

});

describe( 'ConditionalState Hiding fields', () => {
	it( 'Does not get field value when hidden', () => {
		const state = new ConditionalState({
			x:7
		});
		state.hideField('x');
		expect(state.getValue('x')).toEqual(null);
	});

	it( 'Does not set field value when hidden', () => {
		const state = new ConditionalState({
			x:7
		});
		state.hideField('x');
		state.setValue('x', 9 );
		state.showField('x');
		expect(state.getValue('x')).toEqual(9);
	});

	it( 'Hidden fields are NOT in returned state', () => {
		const state = new ConditionalState({
			x:7,
			y: 1,
			r: null
		});
		state.hideField('x');
		const currentState = state.getCurrentState();
		expect( currentState.hasOwnProperty('x')).toBe(false);
		expect( currentState.hasOwnProperty('y')).toBe(true);
		expect( currentState.hasOwnProperty('r')).toBe(true);
	});
});

describe( 'ConditionalState enabling and disabling', () => {
	it( 'Does not update value when disabled', () => {
		const state = new ConditionalState({
			x:7
		});
		state.disableField('x');
		state.setValue('x', 99999 );
		expect(state.getValue('x')).toEqual(7);
	});

	it( 'Can get value when disabled.', () => {
		const state = new ConditionalState({
			x:7
		});
		state.disableField('x');
		expect(state.getValue('x')).toEqual(7);
	});

	it( 'can edit a field value after enabling', () => {
		const state = new ConditionalState({
			x:7
		});
		state.disableField('x');
		expect(state.getValue('x')).toEqual(7);
		state.enableField('x');
		state.setValue('x', 11);
		expect(state.getValue('x')).toEqual(11);
	});

	it( 'Disabled fields are in returned state', () => {
		const state = new ConditionalState({
			x:7,
			y: 1,
			r: null
		});
		state.disableField('x');
		const currentState = state.getCurrentState();
		expect( currentState.hasOwnProperty('x')).toBe(true);
		expect( currentState.hasOwnProperty('y')).toBe(true);
		expect( currentState.hasOwnProperty('r')).toBe(true);
	});
});
