<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://103.9.170.95/~novonordisk/
 * @since             1.0.0
 * @package           Custom_Bmi_Calculator
 *
 * @wordpress-plugin
 * Plugin Name:       Custom Bmi Calculator
 * Plugin URI:        http://103.9.170.95/~novonordisk/
 * Description:       Used this shortcode to use in any where in site <strong>[Custom_Bmi_Calculator_shortcode]</strong>
 * Version:           1.0.0
 * Author:            Expert Coder
 * Author URI:        http://103.9.170.95/~novonordisk/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       custom-bmi-calculator
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'CUSTOM_BMI_CALCULATOR_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-custom-bmi-calculator-activator.php
 */
function activate_custom_bmi_calculator() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-custom-bmi-calculator-activator.php';
	Custom_Bmi_Calculator_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-custom-bmi-calculator-deactivator.php
 */
function deactivate_custom_bmi_calculator() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-custom-bmi-calculator-deactivator.php';
	Custom_Bmi_Calculator_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_custom_bmi_calculator' );
register_deactivation_hook( __FILE__, 'deactivate_custom_bmi_calculator' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-custom-bmi-calculator.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_custom_bmi_calculator() {

	$plugin = new Custom_Bmi_Calculator();
	$plugin->run();

}
run_custom_bmi_calculator();
