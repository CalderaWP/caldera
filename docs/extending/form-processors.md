# How To Create A Caldera (Forms) Processor
This document describes how to create a submission processor that works with the [Caldera Framework](https://github.com/CalderaWP/caldera) and can be used in Caldera Forms 1.8.1+. This is mainly a list of steps, the documentation on each step can be found on other pages in different places.


## Steps To Create A Processor

### 1. Learn About The Framework
First, familiarize yourself with the Caldera framework. It is a modular framework for WordPress plugins and WordPress-powered applications. The documentation is [being written](https://github.com/CalderaWP/caldera/#documentation). You should begin by reading [the review of the modules in the framework](https://github.com/CalderaWP/caldera/blob/master/php-packages/core/README.md#overview).
  
  
* You will need to use the forms package's [processing](https://github.com/CalderaWP/forms/tree/master/src/Processing). 
* If your add-on plugin needs a to add a REST API enddoint, for example for settings, then you will need to use the [rest-api package](https://github.com/CalderaWP/caldera/blob/master/php-packages/rest-api/README.md). 
* If your add-on plugin needs a to make HTTP requests to a remote API, you will need to use the [http package](https://github.com/CalderaWP/caldera/blob/master/php-packages/http/README.md). 

### 2. (optional) Create Endpoints and Routes For Settings
Does your add-on need to get/set data on the server, for example saving API keys or requesting MailChimp lists? If so, add API endpoints using the `@calderawp/rest-api` package.

### 3. (optiona) Prepare HTTP Requests
Will your processor make remote HTTP requests? If so, make sure to review the `calderawp/http` package docs which explain how to use that module to represent HTTP requests and responses and how to dispatch and test HTTP requests.

* Use acceptance tests to figure out remote API and create mock request/ response objects for unit/ integration tests.
* Add unit and/or integration tests that show that your processor can create the right request objects and do the right things with a response object.
    
### 4. Create The Processor
These steps are explained in the [processing readme](https://github.com/CalderaWP/caldera/blob/master/php-packages/forms/src/Processing/README.md)
* Define a processor type
* Add processor callback(s)
* Unit test to prove that the callbacks do what they are intended to do, given input.
* Add processor type to container.

### 5. Using In WordPress With Caldera Forms
NOTE: These features require Caldera Forms 1.8.1, which has not been released yet.
