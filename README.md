# Caldera 

This repository is the [Caldera Framework](https://github.com/CalderaWP/caldera). the [Caldera Framework](https://github.com/CalderaWP/caldera) is one standard set of tools that we -- CalderWP -- use for developing our WordPress plugins and WordPress-powered applications. It is not [Caldera Forms](https://calderaforms.com), it is the framework we are using to build the next version of Caldera Forms, Caldera Forms Pro and other Caldera products.
This is a monorepo. Code is organized into packages that will be installable separately via Composer.

## Documentation
A proper documentation site with generated code reference will be created soon. This part of the documentation will be generated from phpdoc blocks and jsdocs blocks that exist in the code and you can read now.

In addition, the markdown files in `/docs` and all of the README.md files in the codebase -- each package has one, some directories of the packages have one -- will be used in the documentation site. For now, you can read them on Github or locally. 

The `docs` directory contains mainly cheat sheets about testing and React so I didn't have to keep looking for things. If you find a bit of code you're always cutting and pasting, please put it there for others/ you in the future.

The readme for the `calderawp/core` package has a good overview of what the different PHP packages do.

### The First Person
The documentation often is in the first person. "I" is Josh.

### The docs may be wrong.
Sorry. If the docs are wrong, it could be a bug, open an issue please. It could be that I documented how it will work before making it work. Slack me if confused.

## Install

### Short Version
* Install global dependencies
* git clone
    - `git clone git@github.com:CalderaWP/caldera.git`
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
* From root directory, register new package by running `composer merge`.

When package is ready to be published:
* create an empty Github repo.
* In `monorepo-builder.yml`'s `directories_to_repositories` index, map directory to repository
    - https://github.com/Symplify/MonorepoBuilder#5-split-directories-to-git-repositories
* Publish on packagist.
    - @TODO

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

### Releasing, Github and Packagist.
The monorepo builder allows us to split each package to its own Github repo. This allows the packages to be installed via Composer.

* Push updates in core repo to the split packages
    -  `composer split`
    - Do this first or everything will fail.
* Release update
    - `composer release [version]`
    - The provided version will be tagged   
* Pushing to packagist:
    - Should be automatic.

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
[caldera-js](https://github.com/calderawp/caldera-js)

## License, Copyright, etc.
Copyright 2018+ CalderaWP LLC and licensed under the terms of the GNU GPL license. Please share with your neighbor.
