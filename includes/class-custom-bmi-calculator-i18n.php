<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       http://103.9.170.95/~novonordisk/
 * @since      1.0.0
 *
 * @package    Custom_Bmi_Calculator
 * @subpackage Custom_Bmi_Calculator/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Custom_Bmi_Calculator
 * @subpackage Custom_Bmi_Calculator/includes
 * @author     Expert Coder <codeiexpert82@gmail.com>
 */
class Custom_Bmi_Calculator_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'custom-bmi-calculator',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
