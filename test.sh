#!/usr/bin/env bash

# PHP Unit Tests
composer test:packages || { echo 'PHP package Unit tests failed' ; exit 1; }

# JavaScript Unit Tests


# Integration Tests
composer test:integration || { echo 'PHP Integration tests failed' ; exit 1; }

# Acceptance tests
composer test:acceptance || { echo 'PHP Acceptance tests failed' ; exit 1; }
