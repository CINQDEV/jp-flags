<?php
/*
* Plugin Name: JP Flags
* Description: Simple SVG Flag insert
* Version: 1.0.0
* Author: WRM

*/

function admin_enqueue_style() {
    global $ver_num; // define global variable for the version number
    $ver_num = mt_rand(); // on each call/load of the style the $ver_num will get different value
    wp_enqueue_style( 'flag_css', plugins_url( 'assets/css/flag.css', __FILE__ ),false, $ver_num, 'all');
    wp_enqueue_script( 'dropdown_js', plugins_url( 'assets/js/dropdown.js', __FILE__ ), array('jquery'), $ver_num,  'all');
    
    }

add_action('admin_enqueue_scripts', 'admin_enqueue_style');

    
require_once 'functions/admin_display_button.php'; //admin functions
require_once 'functions/flagpage.php'; //admin functions