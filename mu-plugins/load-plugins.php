<?php
/**
 * Plugin Name: Load Plugins
 */
//require_once(__DIR__ . '/vendor/autoload.php');

require __DIR__.'/plugins/wordpress-plugin/wordpress-plugin.php';
require __DIR__.'/plugins/layout-builder/layout-builder.php';

add_filter( 'caldera_forms_api_allow_entry_view', '__return_true' );


function __SHAME__renderValue($value,$formId,$fieldId){
	$form = \Caldera_Forms_Forms::get_form($formId);
	$fieldConfig = \Caldera_Forms_Field_Util::get_field($fieldId, $form);
	return apply_filters('caldera_forms_view_field_' . $fieldConfig[ 'type' ], $value,
		$fieldConfig, $form);
}

/**
 * Add the entry field's rendered HTML to the API response data.
 * This needs to go in CF Pro client
 */
add_filter( 'caldera_forms_api_entry_data', function( $data, Caldera_Forms_Entry $entry )  {
	$formId = $data['form_id' ];
	foreach ($data['fields'] as $fieldId => $field ){
		$value = isset($data['fields'][$fieldId]['value' ]) ? $data['fields'][$fieldId]['value' ] : '';
		$data['fields'][$fieldId]['rendered' ] = __SHAME__renderValue(
			$value,
			$formId,
			$fieldId
		);
	}

	return $data;
},10,2);

//Make all email fields fucking huge
add_filter( 'caldera_forms_view_field_email', function ($value){
	return '<div style="font-size:14em;">'.$value . '</div>';
});


add_action( 'rest_api_init', function (){


	register_rest_route( 'caldera-api/v1', 'message', [

	]);
});



