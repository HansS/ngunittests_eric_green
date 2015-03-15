(function($, angular) {
	"use strict";

	// Register Application Modules
	angular.module("WidgetApp.Constants", []);
	angular.module("WidgetApp.Services", ["WidgetApp.Constants"]);
	angular.module("WidgetApp.Configs", ["ui.router","WidgetApp.Services"]);
	angular.module("WidgetApp.Controllers", ["WidgetApp.Configs"]);
	angular.module("WidgetApp.Directives", ["WidgetApp.Configs"]);

}(jQuery, angular));
