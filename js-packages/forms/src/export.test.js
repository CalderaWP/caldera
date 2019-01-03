import { CalderaGrid } from './';
import { CalderaForm } from './';
import {FormClient} from './';
import { formClientFactory } from './';

describe( 'Exports', () => {
	it( 'exports CalderaForm', () => {
		expect( typeof  CalderaForm ).toBe( 'function' );

	});

	it( 'exports CalderaGrid', () => {
		expect( typeof  CalderaGrid ).toBe( 'function' );

	});





	it( 'exports formClientFactory', () => {
		expect( typeof  formClientFactory ).toBe( 'function' );
	});

	it( 'exports FormClient', () => {
		expect( typeof  FormClient ).toBe( 'function' );
	});
} );
