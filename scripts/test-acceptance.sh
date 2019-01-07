#!/usr/bin/env bash
cd php-packages;
pwd
cd http
composer test:acceptance || { echo 'calderawp/http integration tests failed' ; exit 1; }
cd ../../

cd mu-plugins/plugins/wordpress-plugin/
pwd
composer test:acceptance || { echo 'mu-plugins/plugins/wordpress-plugin integration tests failed' ; exit 1; }
