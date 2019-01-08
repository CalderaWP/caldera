# Caldera Front-end App
This app creates a decoupled front-end for Caldera sites.

## Usage

### Install

* git clone
    - `@todo`
* Install
    - `yarn`

### Start and Test
* Start development server:
    - `yarn start`
* Start test watcher
    - `yarn test`
    

## Notes
This was created using [Razzle](https://github.com/jaredpalmer/razzle), specifically the [after.js](https://github.com/jaredpalmer/razzle/tree/master/examples/with-afterjs) example.

### Proxies
In development, this app proxies requests to `wp-json` to the WordPress server and requests to `caldera-api` to the Express server. Therefore this app can not yet be used outside of our development environment.
