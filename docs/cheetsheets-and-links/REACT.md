
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

### Simulating DOM Events With Enzyme
* https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
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
