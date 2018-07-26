<?php

function enqueue_customjs() {
    wp_enqueue_script( 'custom-medifind-js', get_bloginfo('template_directory') . '/custom.js', array( 'jquery' ), '1.0.0', true );
    wp_enqueue_script( 'custom-medifind-map-js', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB4jMrRuCraI1_tbk1ekCZBSg3orBYOqeA', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'enqueue_customjs' );

function enqueue_customcss() {
    wp_enqueue_style( 'custom-medifind-css', get_bloginfo('template_directory') . '/style.css', array(), '1.0.0', 'all' );
}
add_action( 'wp_enqueue_scripts', 'enqueue_customcss' );