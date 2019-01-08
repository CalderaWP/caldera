# How To Create A Caldera (Forms) Processor
This document describes how to create a submission processor that works with the Caldera framework and can be used in Caldera Forms 1.8.1+. This is mainly a list of steps, the documentation on each step can be found on other pages in different places.


## Steps To Create A Processor

See the `calderawp/forms` README and the readme in [the processing namespace](../../php-packages/forms/src/Processing/README.md)
* Define a processor type
* Add processor callback(s)
* Unit test to prove that the callbacks do what they are intended to do, given input.
* Add processor type to container.

* Create Endpoints and Routes For Settings
Does your add-on need to get/set data on the server, for example saving API keys or requesting MailChimp lists? If so, add API endpoints using the `@calderawp/rest-api` package.

* Remote API requests?
Will your processor make remote HTTP requests? If so, make sure to review the `calderawp/http` package docs which explain how to use that module to represent HTTP requests and responses and how to dispatch and test HTTP requests.

    - Use acceptance tests to figure out remote API and create mock request/ response objects for unit/ integration tests.
    - Add unit and/or integration tests that show that your processor can create the right request objects and do the right things with a response object.
    

## Using In WordPress With Caldera Forms
NOTE: These features require Caldera Forms 1.8.1, which has not been released yet.
