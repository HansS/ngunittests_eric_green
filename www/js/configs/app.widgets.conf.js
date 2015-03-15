(function($, angular) {
	"use strict";

	function configureWidgets(WidgetsProvider, RESTServiceURL) {
		WidgetsProvider.setBaseUrl(RESTServiceURL);
	}

	configureWidgets.$inject = ["WidgetsProvider", "RESTServiceURL"];

	// Add constants to the constants module
	return angular.module("WidgetApp.Configs").config(configureWidgets);

}(jQuery, angular));
