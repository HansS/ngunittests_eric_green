(function($, angular) {
	"use strict";

	function configureRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise("/");
		$locationProvider.html5Mode(false);

		$stateProvider
			.state("home", {
				url: "/",
				controller: "HomeCtrl",
				templateUrl: "partials/home.html"
			})
			.state("view", {
				url: "/view/:widgetId",
				controller: "ViewCtrl",
				templateUrl: "partials/view.html"
			})
			.state("edit", {
				url: "/edit/:widgetId",
				controller: "EditCtrl",
				templateUrl: "partials/edit.html"
			})
			.state("create", {
				url: "/create",
				controller: "CreateCtrl",
				templateUrl: "partials/edit.html"
			});
	}

	configureRoutes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

	// Add constants to the constants module
	return angular.module("WidgetApp.Configs").config(configureRoutes);

}(jQuery, angular));
