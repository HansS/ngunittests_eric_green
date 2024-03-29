(function($, angular) {
	"use strict";

	function createCtrl($scope, Widgets, $location) {

		$scope.widgetOp = "Create";
		$scope.widget = {
			name: "",
			description: "",
			color: "",
			size: "",
			quantity: 0
		};

		$scope.saveWidget = function() {
			Widgets.insert($scope.widget).then(function() {
				$location.path("/");
			});
		};

		$scope.returnToHome = function() {
			$location.path("/");
		};
	}

	createCtrl.$inject = ["$scope", "Widgets", "$location"];

	// Add the create controller to the controllers module
	return angular.module("WidgetApp.Controllers").controller("CreateCtrl", createCtrl);

}(jQuery, angular));
