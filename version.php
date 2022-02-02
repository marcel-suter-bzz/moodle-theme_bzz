<?php
defined("MOODLE_INTERNAL") || die();

// This is the version of the plugin.
$plugin->version = 2022020100;

// This is the version of Moodle this plugin requires.
$plugin->requires = 2016112900.00;  // FixME

// This is the component name of the plugin - it always starts with 'theme_'
// for themes and should be the same as the name of the folder.
$plugin->component = 'theme_bzz';

// This is a list of plugins, this plugin depends on (and their versions).
$plugin->dependencies = [
    'theme_lambda' => 2016102100  // FIXME
];

// This is a stable release.
$plugin->maturity = MATURITY_ALPHA;  // FIXME

// This is the named version.
$plugin->release = 0.1;