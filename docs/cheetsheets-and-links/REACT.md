
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

* Children/ React Element/ DOM Node
    - https://stackoverflow.com/a/42122662/1469799
    
```js
  PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
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

## JSX

### Conditional Rednering
```jsx 
<div>
    {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
    ) : (
        <LoginButton onClick={this.handleLoginClick} />
    )}
</div>

```
* https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator
