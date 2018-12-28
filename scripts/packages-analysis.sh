#!/usr/bin/env bash
vendor/bin/phpstan analyse php-packages/caldera-db/src
vendor/bin/phpstan analyse php-packages/core/src
vendor/bin/phpstan analyse php-packages/data-source/src
vendor/bin/phpstan analyse php-packages/events/src
vendor/bin/phpstan analyse php-packages/forms/src
vendor/bin/phpstan analyse php-packages/interop/src
vendor/bin/phpstan analyse php-packages/rest-api/src
