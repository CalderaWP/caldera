#!/usr/bin/env bash
cd php-packages;
pwd
cd http
composer test:acceptance
cd ../../

cd mu-plugins/plugins/wordpress-plugin/
pwd
composer test:acceptance
