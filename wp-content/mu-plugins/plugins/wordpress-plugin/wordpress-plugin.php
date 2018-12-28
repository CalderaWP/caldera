<?php
/**
 * Plugin Name: Load Plugins
 */
add_action( 'admin_notices', function(){
	echo "<p id='dolly'>Caldera!</p>";
} );

add_action( 'caldera_wordpress_plugin', function ( \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin $module ){
	add_action('rest_api_init',function () use($module)
	{
		(new \calderawp\caldera\WordPressPlugin\RestApi($module, 'register_rest_route') )->initFormsApi();
	});
});

add_action( 'plugins_loaded', function (){
	$module = new \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin( \caldera(), new \calderawp\CalderaContainers\Service\Container() );
	\caldera()->addModule($module);
	do_action( 'caldera_wordpress_plugin', $module);
});





