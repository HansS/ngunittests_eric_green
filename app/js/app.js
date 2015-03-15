module.exports = (function(global, $, angular) {
  "use strict";

  // Register Application Modules
  angular.module("App.Constants", []);
  angular.module("App.Services", ["App.Constants"]);
  angular.module("App.Configs", ["ngRoute","App.Services"]);
  angular.module("App.Controllers", ["App.Configs"]);

  // Register Module Components
  require("./app.constants.js");
  require("./configs/app.route.conf.js");
  require("./configs/app.widgets.conf.js");
  require("./services/app.widgets.svc.js");
  require("./controllers/app.home.ctrl.js");
  require("./controllers/app.view.ctrl.js");
  require("./controllers/app.edit.ctrl.js");
  require("./controllers/app.create.ctrl.js");

  // Return the application module
  return angular.module("App", ["App.Controllers"]);

}(window || global, require('jquery'), require("angular")));
