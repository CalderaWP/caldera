<?php
/**
 * Plugin Name: Caldera Boilerplate WordPress plugin
 */


/**
 * Setup admin page as a sub-menu item of Caldera Forms with a React app for the UI
 */
add_action( 'RestApiAuth', function(){
	//Script handle and page post-fix
	$handle = 'CalderaRestApiAuth';

	//Must have a 2018 or later version of Caldera Forms for the menu to work.
	if (class_exists('Caldera_Forms_Admin_Factory')) {
		//Enqueue the script
		add_action('admin_enqueue_scripts', function ($hook) use ($handle) {
			//Only load on our page.
			if ('caldera-forms_page_caldera-forms-CalderaRestApiAuth' === $hook) {
				include_once __DIR__ . '/react-wp-scripts.php';
				calderawp\RestApiAuth\ReactScripts\enqueue_assets(plugin_dir_path(__FILE__),
					['handle' => $handle]);
			}

		});//Add the menu page
		Caldera_Forms_Admin_Factory::menu_page($handle, __('Caldera Module Name', 'text-domain'),
			'<div id="caldera-CalderaRestApiAuth"></div>', [
				'scripts' => [
					$handle,
				],
			]);
	}


});

/**
 * Load module with Caldera Framework
 */
add_action('plugins_loaded', function () {
	//include autoloader
	include_once __DIR__ . '/vendor/autoload.php';
	//Instantiate module instance using global caldera framework instance
	$module = new \calderawp\RestApiAuth\CalderaRestApiAuth(
		\caldera(),
		new \calderawp\CalderaContainers\Service\Container()
	);
	/**
	 * Action that fires after the RestApiAuth module is loaded in WordPress
	 */
	do_action( 'RestApiAuth', $module );
});





