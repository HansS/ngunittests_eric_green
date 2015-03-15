(function($, angular) {
	"use strict";

	var baseUrl;

	function widgetSvc($http) {
		return {
			insert: function(widget) {
				return $http({
					method: "POST",
					url: baseUrl + "/widgets",
					data: widget
				});
			},
			update: function(widgetId, widget) {
				return $http({
					method: "PUT",
					url: baseUrl + "/widgets/" + encodeURI(widgetId),
					data: widget
				});
			},
			delete: function(widgetId) {
				return $http({
					method: "DELETE",
					url: baseUrl + "/widgets/" + encodeURI(widgetId)
				});
			},
			get: function(widgetId) {
				return $http({
					method: "GET",
					url: baseUrl + "/widgets/" + encodeURI(widgetId)
				});
			},
			getAll: function() {
				return $http({
					method: "GET",
					url: baseUrl + "/widgets"
				});
			}
		};
	}

	widgetSvc.$inject = ["$http"];

	// Add the widgets service to the services module
	return angular.module("WidgetApp.Services")
		.provider("Widgets", function() {

			return {
				setBaseUrl: function(newBaseUrl) {
					baseUrl = newBaseUrl;
				},
				$get: widgetSvc
			};
		});

}(jQuery, angular));
