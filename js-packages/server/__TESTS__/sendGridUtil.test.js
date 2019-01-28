const EmailAddress = require( '../routers/sendgrid/EmailAddress');
const Personalizations = require( '../routers/sendgrid/Personalizations');
describe( 'email address formatter', () => {
	it('should format a string as email if its valid', () => {
		const email = new EmailAddress('roy@hiroy.club');
		expect( email ).toEqual({email: 'roy@hiroy.club', name: ''});
	});

	it('should work with objects that are missing name', () => {
		const email = new EmailAddress({email:'roy@hiroy.club'});
		expect( email ).toEqual({email: 'roy@hiroy.club', name: ''});
	});

	it('should work with objects that include  name', () => {
		const email = new EmailAddress({email:'roy@hiroy.club', name: 'Roy Sivan'});
		expect( email ).toEqual({email: 'roy@hiroy.club', name: 'Roy Sivan'});
	});

	it('should throw exception if passed string without a valid email', () => {
		try{
			const email = new EmailAddress('Harry Potter');
			expect(1).toBe(2);
		}catch (e) {
			expect(typeof e).toBe('string');
		}
	});

	it('should throw exception if passed an object without a valid email', () => {
		try{
			const email = new EmailAddress({email:'Harry Potter'});
			expect(1).toBe(2);
		}catch (e) {
			expect(typeof e).toBe('string');
		}
	});
});
describe('Personalization', () => {
	test('emails from string with array of ccs and bccs', () => {
		const data = {
			to: 'to@one.com',
			subject: 'Welcome To Step 7',
			cc: ['cc1@e.com', 'cc2@e.com'],
			bcc: ['bcc1@e.com', 'bcc2@e.com'],
		}
		const p = new Personalizations(data)
		expect( typeof p.to ).toBe( 'object' );
		expect( typeof p.subject ).toBe( 'string' );
		expect(  p.cc[0].email ).toBe('cc1@e.com' );
		expect(  p.cc[1].email ).toBe('cc2@e.com');
		expect(  p.bcc[0].email ).toBe('bcc1@e.com' );
		expect(  p.bcc[1].email ).toBe('bcc2@e.com');
	});

	test('emails from objects with array of ccs and bccs', () => {
		const data = {
			to: {email:'to@1.com',name:'To Name'},
			subject: 'Welcome To Step 7',
			cc: [
				{email:'cc1@e.com',name:'CC1'},
				{email:'cc2@e.com'},
			],
			bcc: [
				{email:'bc1@e.com'},
				{email:'bc2@e.com',name:'BC2'},
			],
		}
		const p = new Personalizations(data)
		expect( typeof p.to ).toBe( 'object' );
		expect( typeof p.subject ).toBe( 'string' );
		expect(  p.cc[0].name ).toBe('CC1' );
		expect(  p.cc[1].name ).toBe('' );
		expect(  p.bcc[1].name ).toBe('BC2' );
		expect(  p.bcc[0].email ).toBe('bc1@e.com' );

	});

	it('Handles missing CC', () => {
		const data = {
			to: {email:'to@1.com',name:'To Name'},
			subject: 'Welcome To Step 7',
			bcc: [
				{email:'bc1@e.com'},
				{email:'bc2@e.com',name:'BC2'},
			],
		}
		const p = new Personalizations(data)
		expect( typeof p.to ).toBe( 'object' );
		expect( typeof p.subject ).toBe( 'string' );
		expect(  typeof p.cc).toBe('undefined' );
		expect(  p.bcc[1].name ).toBe('BC2' );
		expect(  p.bcc[0].email ).toBe('bc1@e.com' );

	});

	test('Handles missing BCC', () => {
		const data = {
			to: {email:'to@1.com',name:'To Name'},
			subject: 'Welcome To Step 7',
			cc: [
				{email:'cc1@e.com',name:'CC1'},
				{email:'cc2@e.com'},
			],

		};
		const p = new Personalizations(data)
		expect( typeof p.to ).toBe( 'object' );
		expect( typeof p.subject ).toBe( 'string' );
		expect(  p.cc[0].name ).toBe('CC1' );
		expect(  p.cc[1].name ).toBe('' );
		expect(  typeof p.bcc).toBe('undefined' );


	});

	test('Error if bad to', () => {
		const data = {
			to: 'sdfjfds',
			subject: 'Welcome To Step 7',
			cc: [
				{email:'cc1@e.com',name:'CC1'},
				{email:'cc2@e.com'},
			],

		};
		try{
			new Personalizations(data);
			expect( '1').toBe('error should be thrown')
		}catch (e) {
			expect(typeof e).toBe('string');
		}

	});
});
