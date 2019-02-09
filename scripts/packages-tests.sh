#!/usr/bin/env bash

#for dir in php-packages/*; do ( cd "$dir" &&  composer test ); done

composer test:packages-interop || { echo 'Interop unit tests failed' ; exit 1; }

composer test:packages-events || { echo 'Events unit tests failed' ; exit 1; }
composer test:packages-data || { echo 'Data Source unit tests failed' ; exit 1; }
composer test:packages-db || { echo 'Database unit tests failed' ; exit 1; }

composer test:packages-http || { echo 'HTTP unit tests failed' ; exit 1; }
composer test:packages-rest || { echo 'REST unit tests failed' ; exit 1; }
composer test:packages-forms || { echo 'Forms unit tests failed' ; exit 1; }

composer test:packages-messaging || { echo 'Messaging unit tests failed' ; exit 1; }




