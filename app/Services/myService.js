angular
  .module("myServiceModule", ["pascalprecht.translate"]) // Create a new module called 'myServiceModule'
  .service("MyService", [
    "$translate",
    function ($translate) {
      // Inject $translate service
      this.getMessage = function () {
        return "Hello from MyService!";
      };

      this.getTranslatedMessage = function (key, params) {
        return $translate.instant(key, params);
      };

      this.getGreetingWithName = function (name) {
        const greetingKey = "WELCOME_MESSAGE_Service";
        //return this.getTranslatedMessage(greetingKey, { name: name });

        // Wrap the translation in a promise
        return $translate(greetingKey, { name: name });
      };
    },
  ]);
