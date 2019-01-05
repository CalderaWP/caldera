#!/usr/bin/env bash
composer test:packages-interop

composer test:packages-data
composer test:packages-db

composer test:packages-http
composer test:packages-rest

composer test:packages-forms
