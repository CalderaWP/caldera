<?php
/**
 * Plugin Name: Load Plugins
 */
use \calderawp\caldera\Forms\Entry\Entry;

add_action('admin_notices', function () {
	echo "<p id='dolly'>Caldera!</p>";
});

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
		))->addHooks();
	});
	//include_once  __DIR__ . '/test.php';
});

add_action('plugins_loaded', function () {
	$module = new \calderawp\caldera\WordPressPlugin\CalderaWordPressPlugin(\caldera(),
		new \calderawp\CalderaContainers\Service\Container());
	\caldera()->addModule($module);
	do_action('caldera_wordpress_plugin', $module);
});





