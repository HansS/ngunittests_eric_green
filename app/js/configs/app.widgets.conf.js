module.exports = (function(global, $, angular) {
	"use strict";

	function configureWidgets(WidgetsProvider, RESTServiceURL) {
		WidgetsProvider.setBaseUrl(RESTServiceURL);
	}

	configureWidgets.$inject = ["WidgetsProvider", "RESTServiceURL"];

	// Add constants to the constants module
	return angular.module("App.Configs").config(configureWidgets);

}(window || global, require('jquery'), require("angular")));
