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
Creates a field from an object.


### Field Area Factory

```js
import { fieldAreaFactory } from '@caldera-labs/factory';
const nameField = {
    fieldType: 'text',
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


## Components
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
	radioField
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

