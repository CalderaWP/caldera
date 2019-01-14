<?php
/**
 * Plugin Name: Load Plugins
 */
use \calderawp\caldera\Forms\Entry\Entry;


add_action('caldera_wordpress_plugin', function (\calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin $module) {
	add_action('rest_api_init', function () use ($module) {
		(new \calderawp\caldera\WordPressPlugin\RestApi($module, 'register_rest_route'))->initFormsApi();
	});
	add_action('init', function () use ($module){
		$dataBase = new \calderawp\caldera\WordPressPlugin\Database(
			(new \calderawp\DB\Tables())
		);
		$dataBase->formsDatabase();
		(new \calderawp\caldera\WordPressPlugin\Filters\EntryDataFilters(
			$module->getCore()->getEvents()->getHooks(),
			$dataBase->getDataSources()
		))->addHooks($module->getCore()->getEvents()->getHooks());
	});

	//include_once  __DIR__ . '/test.php';
});

add_action('plugins_loaded', function () {
	$module = new \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin(\caldera(),
		new \calderawp\CalderaContainers\Service\Container());
	\caldera()->addModule($module);
	do_action('caldera_wordpress_plugin', $module);
});




add_action( '-rest_api_init', function () {
	register_rest_field( ['page'], 'wpStylesLoaderUrl', array(
		'get_callback' => function(  ) {
			//Find the CSS
			do_action('wp_enqueue_scripts' );

			$loaderUrl = admin_url('load-styles.php' );
			ob_start();
			$header = wp_styles()->do_items(false, 0);
			$html = ob_get_clean(); //html for style tags. Do we need this?
			$loaderUrl .= '?c=1&load=&dir=ltr&load=' . implode($header, ',');
			//Can we prime cache with this?
			return $loaderUrl;

		},
		'update_callback' => null,
		'schema' => array(
			'description' => __( 'WordPress style dependency loader URL.' ),
			'type'        => 'array'
		),
	) );
} );
