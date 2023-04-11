"use strict";

// Declare app level module which depends on views, and core components
angular
  .module("myApp", [
    "ngRoute",
    "pascalprecht.translate",
    "myApp.view1",
    "myApp.view2",
    "myApp.version",
    // custom services
    "myServiceModule",
    "app.services.fmPMFactory"
  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    "$translateProvider",
    function ($locationProvider, $routeProvider, $translateProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider.otherwise({ redirectTo: "/view1" });

      // Load translations from a static file
      $translateProvider.useStaticFilesLoader({
        prefix: "i18n/",
        suffix: ".json",
      });

      // Set the default language
      $translateProvider.preferredLanguage("en");
      // $translateProvider.preferredLanguage("es");
      // $translateProvider.preferredLanguage("ru");
    },
  ]);
