#!/usr/bin/env bash
composer test:core || { echo 'calderawp/core integration tests failed' ; exit 1; }
composer test:wordpress || { echo 'WordPress tests failed' ; exit 1; }

