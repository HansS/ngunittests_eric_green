(function($, angular) {
	"use strict";

	// Add constants to the constants module
	return angular.module("WidgetApp.Constants")
		.constant("RESTServiceURL", "http://localhost:8090/svc");

}(jQuery, angular));
