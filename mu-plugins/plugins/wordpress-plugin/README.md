# WordPress Plugin

## What Does This Do?

* Adds WordPress REST API endpoints for forms and form entry data using the  `calderawp/rest-api` package.
    - [Source](./src/RestApi.php)
* Connects the  `calderawp/caldera-db` database abstraction to the WordPress database to allow form and form entry value CRUD (with anonymize) and queries using the WordPress database.
    - [Source](./src/Database.php)
* Filters that hook into to allow form and form entry value controllers in `calderawp/forms` to supply data from the WordPress database.
    - [Source](./src/Filters/EntryDataFilters.php)

