<?php
/**
 * Plugin Name: Load Plugins
 */
add_action( 'plugins_loaded', function(){});

require WPMU_PLUGIN_DIR.'/plugins/wordpress-plugin/wordpress-plugin.php';
