# Caldera Package name

Provides some sort of functionality.

## Field Factories

### Import With webpack
```js
import { fieldFactory, fieldGroupFactory } from '@caldera-labs/factory';

import { collectFieldValues } from '@caldera-labs/collectFieldValues';

```

## Components

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
