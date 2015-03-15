module.exports = (function(global, $, angular) {
	"use strict";

	function configureRoutes($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(false);

		$routeProvider
			.when("/", {
				controller: "HomeCtrl",
				templateUrl: "partials/home.html"
			})
			.when("/view/:widgetId", {
				controller: "ViewCtrl",
				templateUrl: "partials/view.html"
			})
			.when("/edit/:widgetId", {
				controller: "EditCtrl",
				templateUrl: "partials/edit.html"
			})
			.when("/create", {
				controller: "CreateCtrl",
				templateUrl: "partials/edit.html"
			})
			.otherwise({
				redirectTo: "/"
			});
	}

	configureRoutes.$inject = ["$routeProvider", "$locationProvider"];

	// Add constants to the constants module
	return angular.module("App.Configs").config(configureRoutes);

}(window || global, require('jquery'), require("angular")));
