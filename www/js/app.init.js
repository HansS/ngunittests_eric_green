(function($, angular) {
	"use strict";

	// Return the application module
	return angular.module("WidgetApp", ["WidgetApp.Controllers","WidgetApp.Directives"])
		.run(function() {

			console.log("application running");

		});

}(jQuery, angular));
