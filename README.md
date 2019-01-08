# Caldera 

This repository is the home of the Caldera framework. The Caldera framework is one standard set of tools that we -- CalderWP -- use for developing our WordPress plugins and WordPress-powered applications. It is not [Caldera Forms](https://calderaforms.com). It is the spirtual child of Caldera Forms that is being used to build the next version of Caldera Forms, Caldera Forms Pro and other Caldera products.
This is a monorepo. Code is organized into packages that will be installable separately via npm or Composer.

## Documentation
A proper documentation site with generated code reference will be created soon. This part of the documentation will be generated from phpdoc blocks and jsdocs blocks that exist in the code and you can read now.

In addition, the markdown files in `/docs` and all of the README.md files in the codebase -- each package has one, some directories of the packages have one -- will be used in the documentation site. For now, you can read them on Github or locally. 

The `docs` directory contains mainly cheat sheets about testing and React so I didn't have to keep looking for things. If you find a bit of code you're always cutting and pasting, please put it there for others/ you in the future.

### The First Person
The documentation often is in the first person. "I" is Josh.

### The docs may be wrong.
Sorry. If the docs are wrong, it could be a bug, open an issue please. It could be that I documented how it will work before making it work. Slack me if confused.

## Install

### Short Version
* Install global dependencies
* git clone
    - ``
* Install and Start servers
    - `bash start.sh`
* Run every test
    - `bash test.sh`

### Development Global Dependencies
* git
* yarn
* Docker
* Lando
* node

### Install And Start
* Clone from Github
    - `git clone ...`
* Install dependencies and start server
    - `bash start.sh`
    
### Restart
`bash start.sh`

## PHP Code

PHP code is organized into reusable packages. For an overview of each package, see [the Core package README.md](./php-packages/core/README.md).

### Organization
All PHP code is organized into packages in the `php-packages` directory. 

* Using [symplify/monorepobuilder](https://github.com/symplify/monorepobuilder) to manage shared dependencies.
    -  See [https://gomonorepo.org/](https://gomonorepo.org/)
* If a package depends on something, define that dependency in it's composer.json.
* The command `composer merge` updates root composer.json 

Each package SHOULD have these commands:
* `composer test` 
    - This should run the unit tests
* `composer tests` 
    - This should run all tests a package has. **Very few packages have this, must fix.**
* `composer fixes`
    - This should run all lints/sniffs/ fixes

A package MAY have these commands:

* Run unit tests
    - `composer test:unit`

* Run acceptance tests
    - `composer test:acceptance`

Do NOT add dependencies, autoloaders, or any other field that monorepo builder overwrites in the root dir composer.json. Use meta package instead.

### Add A Package

* Copy the `boilerplate/php-packages` to `php-packages`
* Change name of new directory name
* Change the library name to `calderawp/<name>` where <name> is the same name as the directory.
* Find and replace `packageName` in new directory replacing with new package's namespace;
* From root directory, register new package by running `composer merge`

### Testing
Tests SHOULD be organized according to which of these questions they answer:

* Unit tests
    - Do individual units within packages work?
* Integration tests
    - Do packages work as expected in isolation?
    - Do the packages work together correctly?
    - Do the WordPress plugin(s) consume the packages correctly?
* Acceptance Tests
    - Does the whole system work?
    - These tests should be minimal and use HTTP requests or CLI commands.


### Unit Tests
Unit tests should go in the sub-packages.

* From root directory `composer test` will run all package unit tests and and fixes plus the integration tests and also the WordPress tests
* From root directory `composer fixes` will run phpcs fixes on all packages.

#### Integration Tests
Unit tests should not use classes from other packages, that's what integration tests are for. Integration tests are in the core package.

* From root directory `composer test:integration` will run the integration tests.

#### Acceptance Tests

Acceptance tests should be added to each package as a separate test suite -- see the http package and WordPress plugin. 
* Run All PHP Acceptance Tests (Packages + WordPress)
    - `composer test:acceptance`
    
That command calls `scripts/test-acceptance.sh`. Any new acceptance tests suites that are created need to get added to that script.

### Static Analysis and Type Checking
To run static analysis and type checking with [phpstan](https://github.com/phpstan/phpstan) run the command `composer analysisgi`

#### Snapshot Testing
PHP Snapshot tests should go in /tests/Integration and extend `calderawp\caldera\Tests\Integration\TestCase\SnapShotTestCase`

Snapshot tests use [spatie/phpunit-snapshot-assertions](https://github.com/spatie/phpunit-snapshot-assertions)

* From root directory `composer snapshot:accept` will accept a change to a snapshot test that is currently failing.

### WordPress
In general, most development should not require WordPress. A local WordPress environment with xdebug, mailhog, phpmyadmin, etc is included, using Lando.

WordPress-specific code should be placed in `/mu-plugins`. Plugins with composer.json files in the `/mu-plugins/plugins` folder are merged into the monorepo.

* Run WordPress' tests 
    - `composer test:wordpress`
    
See [local WordPress development docs for install instructions](./docs/WordPressLocalDev.md)

#### See:
* https://docs.devwithlando.io/tutorials/wordpress.html
* https://joshpress.net/create-a-wordpres-site-with-lando/

## JavaScript
Monorepo managment is handled by Lerna. 

__Do NOT use npm, use Yarn.__

Approach to implimenting CRA + shared component libraries came from [this post](https://itnext.io/guide-react-app-monorepo-with-lerna-d932afb2e875) and [this repo](https://github.com/nareshbhatia/lerna-workspaces-react-es6)

* Start storybooks
    - `yarn storybook`
* Run unit tests for all packages
    - `yarn test`
* Start development server
    - `yarn build && yarn start`
    
### Managing Dependencies

* Add dependency
    - `yarn lerna add classnames`  
    
* Remove Dependency
    - `yarn lerna exec -- yarn remove fetch-mock`
#### See
* https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d
* https://github.com/lerna/lerna/tree/master/commands/add
 
### Components
Components should be developed in `/js-packages/components`. Storybooks is provided for testing/ previewing components. Jest is also used for testing.

* Transpile components
    - `yarn build`
 * Test components
     - `yarn test:components`   
### React App + With SSR - Port 3000
React app for decoupled, server-side rendered WordPress front-end that we can reuse in WordPress. The app was scaffold with [Razzle](https://github.com/jaredpalmer/razzle) and uses After.js and react-dom-router for routing.

#### Location 
`js-packages/app`

#### Using

* Start app server
    - `yarn start`
* Test app
    - `yarn test:app`

   
###  Express Server - Port 5000
This server is used for two purposes:

* Fake APIs to run tests against.
* API endpoints when we want to use Node instead of PHP.

#### Location 
`js-packages/server`

#### Uses
* Express

#### Using

* Start app server
    - `yarn start:server`
* Test app
    - `yarn test:server`
    
### Acceptance tests

Acceptance tests, for now, are testing the REST API by making requests. They are in `js-packages/factory/acceptence/wp-rest-create-entry.test.js` for now.

Before Running Tests:
    - `bash start.sh`
Run Tests: 
    - `yarn test:acceptence`
    
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
import {FieldArea,} from '@caldera-labs/factory';

//Does not work. Makes errors about imports.
// Do not try to fix.
import {FieldArea} from "@caldera-labs/factory/src/components/FieldArea";
```
### Also See
https://github.com/nareshbhatia/lerna-workspaces-react-es6
https://www.nearform.com/blog/sharing-react-components-with-lerna/
https://medium.com/@luisvieira_gmr/building-large-scale-react-applications-in-a-monorepo-91cd4637c131
https://itnext.io/guide-react-app-monorepo-with-lerna-d932afb2e875
https://www.robinwieruch.de/visual-regression-testing-react-storybook/


## License, Copyright, etc.
Copyright 2018+ CalderaWP LLC and licensed under the terms of the GNU GPL license. Please share with your neighbor.
