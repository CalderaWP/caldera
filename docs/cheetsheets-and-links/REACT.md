
* https://reactjs.org/docs/typechecking-with-proptypes.html

## Props

### Default Props

https://reactjs.org/docs/react-without-es6.html#declaring-default-props

### Prop Types
https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes


* String, number or array
```js
PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
])
```

* String or number 
```js
PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
])
```

* Enum - Must be one of these values
```js
PropTypes.oneOf(['optionOne', 'optionTwo'])
```

* Object With Shape -- Object with specific properties.
```js
 PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  })
```
## Testing

https://reactjs.org/docs/test-renderer.html

### A

### Snapshot Testing

### Simulating DOM Events With Enzyme
* https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
* https://jestjs.io/docs/en/mock-functions#using-a-mock-function
#### Change Event
```js
const component = mount(
    <select />
);
const event = {target: {value: 2}};
component.find( 'select' ).simulate( 'change', event );
```
#### Click Event
```js
const component = mount(
    <input />
);
component.find( 'input' ).simulate( 'click' );
```

### Testing Change Events
```js
import { shallow } from 'enzyme';

describe( 'Something', () => {
	let onChange;
	beforeEach( () => {
		//Reset mocks
		onChange= jest.fn();
	});

	it( 'Changes calls change handler', () => {
		const component = shallow(
			<input
				onChange={onChange}
			/>
		);
		//Find input and simulate change
		component.find( 'input' ).simulate( 'change' );
		//check mock callback was called once
		expect(onChange.mock.calls.length).toBe(1);
	});

	it( 'Calls change handler with value', () => {
		const component = shallow(
			<select
				onChange={onChange}
			>
				<option value={1}key={1}>1</option>
				<option value={2} key={2}>2</option>
			</select>
		);
		const expectedValue = 2;
		//Find select and simulate change
		const event = {target: {value: expectedValue}};
		component.find( 'select' ).simulate( 'change', event );
		//check mock callback was called with the right value
		expect(onChange.mock.calls[0][0]).toBe(expectedValue);
	});
});


```

### There Can Only Be One
You can not call `simulate()` on multiple nodes. Use `first()`.

* https://airbnb.io/enzyme/docs/api/ReactWrapper/first.html

```js
	it( 'Changes calls change handler of radio field', () =>  {
		const component = mount(<Field
			field={radioField} onChange={onChange} onBlur={onBlur}
		/>);

		component.find( 'input' ).first().simulate( 'change' );
		expect(onChange.mock.calls.length).toBe(1);
	});
```
## Spread Props
Want to print an array of props, such as HTML attributes without having to unwrap each one?

```js
const attributes = {
	placeholder: 'roy',
	value: 'mike'
}

//Boring
<input value={attributes.value} placeholder={attributes.placeholder} />

//Better
<input {...attributes} />
```
