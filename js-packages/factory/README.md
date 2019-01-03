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
##  Factories


### Import With webpack
```js
import { fieldFactory, fieldAreaFactory } from '@caldera-labs/factory';

import { collectFieldValues } from '@caldera-labs/collectFieldValues';

```

### Field Factory
Creates a field from an object.



## Components

### `Field`
Let's you use `fieldFactory()` as a React component.

### `Fields`
Iterates through a collection of fields, passing each child to `Field`.


### Import With webpack
```js
import { 
	Rows,
	Row, 
	Field,
	Fields,
	FieldGroup
} from '@caldera-labs/factory';
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
