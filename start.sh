#!/usr/bin/env bash
lando start
[[ -d node_modules ]] || yarn
[[ -d vendor ]] || composer install
yarn build
yarn start
