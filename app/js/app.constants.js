module.exports = (function(global, $, angular) {
  "use strict";

  // Add constants to the constants module
  return angular.module("App.Constants")
    .constant("RESTServiceURL", "http://localhost:8080/svc");

}(window || global, require('jquery'), require("angular")));
