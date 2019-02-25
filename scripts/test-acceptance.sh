#!/usr/bin/env bash
cd php-packages;
pwd

cd caldera-db
pwd
#composer test:acceptance || { echo 'calderawp/db acceptance tests failed' ; exit 1; }
cd ../../

cd rest-api
pwd
composer test:acceptance || { echo 'calderawp/rest-api acceptance tests failed' ; exit 1; }
cd ../

cd http
pwd
composer test:acceptance || { echo 'calderawp/http acceptance tests failed' ; exit 1; }
cd ../../


cd mu-plugins/plugins/wordpress-plugin/
pwd
composer test:acceptance || { echo 'mu-plugins/plugins/wordpress-plugin integration tests failed' ; exit 1; }
