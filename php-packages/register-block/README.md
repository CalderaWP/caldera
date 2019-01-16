# Block Registration

Registers block with extra features:
1) Inlined CSS, when needed
    - Inspired by: https://nathanrice.me/blog/wordpress-gutenberg-performance/

## Usage

### Install
`composer require calderawp/register-block`

### Examples

```php
$registerBlocks = new \calderawp\caldera\RegisterBlock\RegisterBlocks( 'your-namespace' );
$registerBlocks->registerBlock( 'call-to-action', [
	'attributes' => 'text',
	'style' => 'cta-style',
]);
add_filter( 'render_block', [ $registerBlocks, [ 'whenPrintBlocks'], 10, 2 ] );
```


### Doing An Action (Dispatch)
Not yet implemented.

## Testing

### Install For Development
* Clone
    - `git clone`
* Install 
    - `composer install`
    
### Test commands
* Run unit tests
    - `composer test:unit`
* Run integration tests
    - `composer test:integration`
* Run acceptance tests
    - `composer test:acceptance`
    
## License, Copyright, etc.
Copyright 2019+ CalderaWP LLC and licensed under the terms of the GNU GPL license. Please share with your neighbor.
