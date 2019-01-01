# Caldera 
This is a monorepo. Code is organized into packages that will be installable separately via npm or Composer.


# Install
`git clone ...`
`composer install`


## PHP Code

### Organization
All PHP code is organized into packages in the `php-packages` directory. 

* Using [symplify/monorepobuilder](https://github.com/symplify/monorepobuilder) to manage shared dependencies.
* See [https://gomonorepo.org/](https://gomonorepo.org/)
* If a package depends on something, define that dependency in it's composer.json.
* The command `composer merge` updates root composer.json 

Each package should have these commands:
* `composer test` 
* `composer fixes`

Do NOT add dependencies, autoloaders, or any other field that monorepo builder overwrites in the root dir composer.json. Use meta package instead.

### Add A Package
* Copy the `boilerplate/php-packages` to `php-packages`
* Change name of new directory name
* Change the library name to `calderawp/<name>` where <name> is the same name as the directory.
* Find and replace `packageName` in new directory replacing with new package's namespace;
* From root directory, register new package by running `composer merge`

### Testing
Unit tests should go in the sub-packages.

* From root directory `composer test` will run all package unit tests and and fixes plus the integration tests and also the WordPress tests
* From root directory `composer fixes` will run phpcs fixes on all packages.

### Integration Tests
Unit tests should not use classes from other packages, that's what integration tests are for. Integration tests are in the core package.

* From root directory `composer test:integration` will run the integration tests.

### Static Analysis and Type Checking
To run static analysis and type checking with [phpstan](https://github.com/phpstan/phpstan) run the command `composer analysisgi`

#### Snapshot Testing
PHP Snapshot tests should go in /tests/Integration and extend `calderawp\caldera\Tests\Integration\TestCase\SnapShotTestCase`

Snapshot tests use [spatie/phpunit-snapshot-assertions](https://github.com/spatie/phpunit-snapshot-assertions)

* From root directory `composer snapshot:accept` will accept a change to a snapshot test that is currently failing.

### WordPress
In general, most development should not require WordPress. 

A local WordPress environment with xdebug, mailhog, phpmyadmin, etc is included, using Lando.

* Install Lando
    - https://docs.devwithlando.io/installation/installing.html
* Start server
    - `lando start`
* Go to [https://caldera.lndo.site](https://caldera.lndo.site) and dismiss the HTTPS warning.

WordPress-specific code should be placed in `/mu-plugins`. Plugins with composer.json files in the `/mu-plugins/plugins` folder are merged into the monorepo.

Run WordPress' tests `composer test:wordpress`

#### See:
* https://docs.devwithlando.io/tutorials/wordpress.html
* https://joshpress.net/create-a-wordpres-site-with-lando/

## JavaScript
Monorepo managment is handled by Lerna. 

__Do BIT use npm, use Yarn.__

Approach to implimenting CRA + shared component libraries came from [this post](https://itnext.io/guide-react-app-monorepo-with-lerna-d932afb2e875) and [this repo](https://github.com/nareshbhatia/lerna-workspaces-react-es6)

* Start storybooks
    - `yarn storybook`
* Run unit tests for all packages
    - `yarn test`
* Start development server
    - `yarn build && yarn start`
    
### Managing Dependencies

* Add depenendency
    - `yarn lerna add classnames`   
    
#### See
* https://github.com/lerna/lerna/tree/master/commands/add
 
### Components
Components should be developed in `/js-packages/components`. Storybooks is provided for testing/ previewing components. Jest is also used for testing.

* Transpile components
    - `yarn build`
 * Test components
     - `yarn test:components`   
### React App

* Start app server
    - `yarn start`
* Test app
    - `yarn test:app`
    
### Add a package
* Copy `boilerplate/js-package` to `js-packages` and rename directory for package name.
* Change package name and description in package's package.json.
* In root directory add package to monorepo.
    - `yarn lerna bootstrap`
* Change storybook port to a unique port to avoid collisions with other libraries.
    - In package.json, scripts -> storybook, argument is `-p`
* Add build and test commands to main package.json (monorepo)
    - ` "build:<package-name>": "lerna exec --scope @caldera-labs/<package-name> -- babel src -d dist --ignore test.js,story.js,fixtures.js",`
    - `"test:<package-name>": "cd js-packages/<package-name> && yarn test"`
#### See
* https://github.com/lerna/lerna/blob/master/commands/bootstrap/README.md

### Sharing Packages
When you import a module from one package to another, the IDE may try and autocomplete, the full path. That imports the module __without__ babelifification. These packages are designed to be used separately, so being forced to use the correct name is good.
 
```js
//Works!
import {FieldGroup,} from '@caldera-labs/factory';

//Does not work. Makes errors about imports.
// Do not try to fix.
import {FieldGroup} from "@caldera-labs/factory/src/components/FieldGroup";
```
### Also See
https://github.com/nareshbhatia/lerna-workspaces-react-es6
https://www.nearform.com/blog/sharing-react-components-with-lerna/
https://medium.com/@luisvieira_gmr/building-large-scale-react-applications-in-a-monorepo-91cd4637c131
https://itnext.io/guide-react-app-monorepo-with-lerna-d932afb2e875
https://www.robinwieruch.de/visual-regression-testing-react-storybook/
