(function($, angular) {
	"use strict";

	function homeCtrl($scope, Widgets) {

		Widgets.getAll().then(function(results) {
			$scope.widgets = results.data;
		});

		$scope.deleteWidget = function(widgetId) {
			Widgets.delete(widgetId)
			.then(function() {
				return Widgets.getAll();
			})
			.then(function(results) {
				$scope.widgets = results.data;
			});
		};
	}

	homeCtrl.$inject = ["$scope","Widgets"];

	// Add the home controller to the controllers module
	return angular.module("WidgetApp.Controllers").controller("HomeCtrl", homeCtrl);

}(jQuery, angular));
