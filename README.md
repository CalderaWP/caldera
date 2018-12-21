# Caldera 
This is a mono-repo. Code is organized into packages that will be installable separately via npm or Composer.


# Install
`git clone ...`
`composer install`


## PHP Code

### Organization
All PHP code is organzied into packages in the `php-packages` directory. 

* Using [symplify/monorepobuilder](https://github.com/symplify/monorepobuilder) to manage shared dependencies.
* See [https://gomonorepo.org/](https://gomonorepo.org/)
* If a package depends on something, define that dependency in it's composer.json.
* The command `composer merge` updates root composer.json 

### Testing
Tests should go in the sub-packages, and be run with `composer test`

From root directory `composer test` will run all tests.

### JavaScript
https://github.com/nareshbhatia/lerna-workspaces-react-es6
https://www.nearform.com/blog/sharing-react-components-with-lerna/
https://medium.com/@luisvieira_gmr/building-large-scale-react-applications-in-a-monorepo-91cd4637c131
https://itnext.io/guide-react-app-monorepo-with-lerna-d932afb2e875
