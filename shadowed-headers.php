<?php
/*
Plugin Name: Shadowed Headers
Plugin URI: http://internetdienste-berlin.de
Description: Headers h1,h2 and block elements with class "shadow" are given a fine shadow to create a 3d effect.
Version: 1.1.3
Author: Dietrich Koch
Author URI: http://internetdienste-berlin.de
License: GPL*/
if(!is_admin()){
		wp_enqueue_script ('shadowed-headers', '/' .PLUGINDIR . '/shadowed-headers/shadowed-headers.js', array('jquery'));
		wp_enqueue_style ('shadowed-headers_css', '/' .PLUGINDIR . '/shadowed-headers/shadowed-headers_css.css');
		wp_enqueue_style ('shadowed-headers_custom', '/' .PLUGINDIR . '/shadowed-headers_custom.css');
	}
?>
