#!/usr/bin/env bash

#for dir in php-packages/*; do ( cd "$dir" &&  composer test ); done


composer test:packages-interop

composer test:packages-data
composer test:packages-db

composer test:packages-http
composer test:packages-rest

composer test:packages-forms
