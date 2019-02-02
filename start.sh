#!/usr/bin/env bash
lando start
[[ -d vendor ]] || composer install

