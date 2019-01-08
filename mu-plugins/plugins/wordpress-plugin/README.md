# WordPress Plugin

## What Does This Do?

* Adds WordPress REST API endpoints for forms and form entry data using the  `calderawp/rest-api` package.
    - [Source](./src/RestApi.php)
    - [Source](./src/Traits/CreatesWordPressEndpoints.php) - A trait you can reuse with most of the WordPress logic.
* Connects the  `calderawp/caldera-db` database abstraction to the WordPress database to allow form and form entry value CRUD (with anonymize) and queries using the WordPress database.
    - [Source](./src/Database.php)
* Filters that hook into to allow form and form entry value controllers in `calderawp/forms` to supply data from the WordPress database.
    - [Source](./src/Filters/EntryDataFilters.php)


## Add A REST API Endpoint To WordPress
The `calderawp/rest-api` package creates endpoints and routes that are decoupled from WordPress. This plugin provides the logic to register those endpoints and routes with WordPress.

```php

use calderawp\caldera\WordPressPlugin\Traits\CreatesWordPressEndpoints;


$api = new class {
    //This trait is used in `RestApi` class to create forms API.
    //Reuse the logic.
	use CreatesWordPressEndpoints;
	
	//must have namespace
	protected $namespace = '/something';
	
	//What function to call when registering.
	//Supply your custom wrapper function here or use WP core's
	protected $registerFunction = "register_rest_route";
	
	//register route is protected for (now) add  public method
	public function addRoute( \calderawp\caldera\restApi\Route $route ){
		$this->registerRoute($route);
	}
};
```

BTW This example code shows that the trait is relying on parent having properties set. That's not optimal.

## Tests

* Run unit tests
    - `composer test:unit`
* Run integration tests
    - `composer test:integration`
* Run acceptance tests
    - `composer test:acceptance`
* Run unit, integration and acceptance tests
    - `composer tests`
