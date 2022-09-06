<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * bzz theme config.
 *
 * @package   theme_bzz
 * @copyright 2022 Marcel Suter
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
defined("MOODLE_INTERNAL") || die();

$plugin->version = 2022080202;

$plugin->requires = 2021051700;

$plugin->component = 'theme_bzz';

$plugin->dependencies = [
    'theme_boost' => 2022041900
];

$plugin->maturity = MATURITY_BETA;

// This is the named version.
$plugin->release = 0.1;