# Caldera Package name

Provides some sort of functionality.

## Overview 

This package creates form elements and layout elements via objects describing them, that can be encoded as JSON, say what a REST API responds with.

* Field - The 
```html
<label/>
<input />
```

or 

```html
<label/>
<input />
<p>Description</p>

```

* Field Area - 
```html
<div>
    <label/>
    <input />
</div>
```

or

```html
<div>
    <label/>
    <input />
    <p>Errors Have Happened</p>
</div>
```

### Grid Components
[See ./src/components/Grid/README.md](src/components/Grid/README.md)
##  Factories


### Import With webpack
```js
import { fieldFactory, fieldAreaFactory } from '@caldera-labs/factory';

import { collectFieldValues } from '@caldera-labs/collectFieldValues';

```

### Field Factory
Creates a field from an object. Does not create the area around the field -- outer HTML wrapping element, section for error messages, etc.

```js
const toggleField = {
	fieldType: 'toggle',
	label: 'Enable',
	fieldId: 'toggleFieldLabel',
	checked:true,
};
return (
    <Fragment>
        {fieldAreaFactory(
            toggleField,
            (checked) => {
               console.log(checked)
            }
        )}
    </Fragment>
)
```


### Field Area Factory
This creates the complete HTML area around a field. `<wrapper><label/><input /><messages/></wrapper>`

```js
import { fieldAreaFactory } from '@caldera-labs/factory';
const nameField = {
    fieldType: 'input',
    html5Type: 'text',
    value: 'Infinite Vague',
    label: 'Name',
    fieldId: 'fromName',
    required: true,
};
return (
    <Fragment>
        {fieldAreaFactory(
            nameField,
            (name) => {
               console.log(name)
            }
        )}
    </Fragment>
)
```

### Magic Tag Autocomplete Rich Text
```js
import { fieldAreaFactory } from '@caldera-labs/factory';
const magicField = {
    fieldType: 'magic-richtext',
    value: 'Infinite Vague',
    label: 'Message',
    fieldId: 'message',
    fieldCompletes: {
        { id: 1, value: '%field1%'}	
    },
    otherCompletes: {
        { id: 1, value: '%field1%'}	
    }
};
return (
    <Fragment>
        {fieldAreaFactory(
            magicField,
            (values) => {
               console.log(values)
            }
        )}
    </Fragment>
)
```

## Components
These are components that the factories use, that may be useful on their own.

### Import With webpack
```js
import { 
	Rows,
	Row, 
	Field,
	Fields,
	FieldArea
} from '@caldera-labs/factory';
```
### `Field`
Let's you use `fieldFactory()` as a React component.

### `Fields`
Iterates through a collection of fields, passing each child to `Field`.

#### `FieldArea`

```js
const field = {
    fieldId: '',
    type: 'input',
    html5type: 'text',
    required: false,
    label: '',
    description: ''
};

<FieldArea
    field={field}
    onChange={onChange}
    onBlur={onBlur}
    fieldErrors={fieldErrors}
    fieldsTouch={fieldsTouched}
/>
```



### Fixtures
This package also exports fixtures for testing columns and fields.

```js
import{
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField,
	toggleField,
    	textAreaField,
} from '@calderawp/factory';
```


## Testing

* Run Unit Tests - Jest.
    - `yarn tests`

* Run Storybooks
    - `yarn storybook`

## Other Commands
* Lint code
    - `yarn lint`
* Build Package
    - `yarn package`
    - The output is stored in the `dist` folder.

