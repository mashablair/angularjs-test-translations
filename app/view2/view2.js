"use strict";

angular
  .module("myApp.view2", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view2", {
        templateUrl: "view2/view2.html",
        controller: "View2Ctrl",
      });
    },
  ])

  .controller("View2Ctrl", [
    "$scope",
    "MyService",
    "fmPMFactory",
    function ($scope, MyService, fmPMFactory) {
      $scope.name = "Masha";

      // Use custom MyService:
      $scope.message = MyService.getMessage();

      // User custom MyService w/ promise
      MyService.getGreetingWithName($scope.name).then(function (greeting_service_concat) {
        $scope.greeting_service_concat = greeting_service_concat;
      });

      // Call fmPMFactory.getPostPriorText()
      $scope.postPriorText = fmPMFactory.getPostPriorText();
    },
  ]);
