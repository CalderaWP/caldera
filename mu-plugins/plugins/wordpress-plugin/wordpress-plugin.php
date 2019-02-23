<?php
/**
 * Plugin Name: Load Plugins
 */
use \calderawp\caldera\Forms\Entry\Entry;


/**
 * Do stuff after plugin loads
 */
add_action('caldera_wordpress_plugin', function (
	\calderawp\caldera\WordPressPlugin\Contracts\CalderaWordPressPluginContract $module) {
update_post_meta(119, 'post_id', 119 );
	/**
	 * Attach our REST API endpoint to WordPress REST API
	 */
	add_action('rest_api_init', function () use ($module) {
		(new \calderawp\caldera\WordPressPlugin\RestApi($module, 'register_rest_route'))
			->initFormsApi()
			//->initProApi() //@TODO finish this
			->initAuth( );//need to update

	});



	//Allow our JWT-authentication to set WordPress user -> BTW This is not correct yet.
	add_filter('determine_current_user', [$module->getRestApiModule()->getWpRestApiAuth(),'determineUser' ]);

	/**
	 * Attach to other WordPress APIs
	 */
	add_action('init', function () use ($module){
		//Setup our Database API
		$dataBase = new \calderawp\caldera\WordPressPlugin\Database(
			(new \calderawp\DB\Tables())
		);
		$dataBase->formsDatabase();
		$dataBase->getTables()->createTable(
			$module->getMessageTableSchema()
		);

		//Allow our event system to trigger/ be triggered by apply_filters()
		(new \calderawp\caldera\WordPressPlugin\Filters\EntryDataFilters(
			$module->getCore()->getEvents()->getHooks(),
			$dataBase->getDataSources()
		))->addHooks($module->getCore()->getEvents()->getHooks());


	});

});

/**
 * When plugins are done loading, start this plugin's module and register with Caldera app.
 */
add_action('plugins_loaded', function () {
	global  $wpdb;
	$container = new \calderawp\CalderaContainers\Service\Container();
	$container->bind('\wpdb',$wpdb);
	$module = new \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin(\caldera(),$container);
	\caldera()->addModule($module);
	do_action('caldera_wordpress_plugin', $module);
});


/**
 * Set a breakpoint here when debugging REST API
 */
add_filter( 'rest_pre_serve_request', function( $served, $result, $request) {
	return $served;
}, 11, 3 );

/**
 * Set a breakpoint here when debugging authentication
 */
add_filter( 'determine_current_user', function($user ){
	$token = isset( $_SERVER['HTTP_AUTHORIZATION' ] ) ? $_SERVER['HTTP_AUTHORIZATION' ] : null;
	return $user;
},25 );
