<?php
//Mock WordPress functions, should be using mockery
// phpcs:disable
if( ! function_exists('register_block_type') ){
	function register_block_type($name, $args ){
		return true;
	}
}

if( ! function_exists( 'wp_print_styles' ) ){
	function wp_print_styles(){
		return 'p {color:green;}';
	}
}
