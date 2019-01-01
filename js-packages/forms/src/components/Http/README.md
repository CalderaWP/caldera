
## Form Client
The form client is subscribes to the form and is aware of the field values, and runs callback functions -- if supplied through the constructor -- at the following events:

* Form is loading
* Form is ready
* Form field is changed
* Form field is blurred
* Form is validating
* Form has failed validation
* Form is submitting
* Form has submitted successfully
* Form has submitted unsuccessfully

At each of these events, the following parameters are passed to the callback:

* `{object}` Field Values
    - Object, keyed for the field's id of the current field values.
* Session nonce?
* Entry token?
* Form?

### Import With webpack

### Insantiate

### Getting Field Values
If a form has a field with the id of `firstName` then you can get its value using the property `firstName` of the client. 

```js
const form = {
	fieldValues: {
		firstName: 'Valkyrie'
	}
}
const client = FormClient(form, {});
let firstName = client.firstName; //Value is Valkyrie

```

### Setting Field Values
If a form has a field with the id of `firstName` then you can set its value using the property `firstName` of the client. 

```js
const form = {
	fieldValues: {
		firstName: 'Valkyrie'
	}
}
const client = FormClient(form, {});
let firstName = client.firstName; //Value is Valkyrie
client.firstName = 'Thor';
firstName = client.firstName; //Value is Thor

```
