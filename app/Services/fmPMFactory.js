angular
  .module("app.services.fmPMFactory", ["pascalprecht.translate"])
  .factory("fmPMFactory", fmPMFactory).name;

/* @ngInject */
function fmPMFactory($filter, $translate) {
  var translate = $filter("translate");
  // var PostMonthsPriorToDueDate = 0;
  // var PostDaysPriorToDueDate = 0;

  var PostMonthsPriorToDueDate = 5;
  var PostDaysPriorToDueDate = 3;

  var getPostPriorText = function () {
    if (PostMonthsPriorToDueDate != 0 && PostDaysPriorToDueDate != 0) {
      // en.json: "Post {{months}} month(s) and {{days}} day(s) before due date"
      return $translate.instant("POST_PRIOR_TEXT", {
        months: PostMonthsPriorToDueDate,
        days: PostDaysPriorToDueDate,
      });
    }
    // en.json: "Post {{months}} month(s) before due date"
    if (PostMonthsPriorToDueDate != 0) {
      return $translate.instant("POST_PRIOR_TEXT_MONTHS_ONLY", {
        months: PostMonthsPriorToDueDate,
      });
    }

    // en.json: "Post {{days}} day(s) before due date"
    return $translate.instant("POST_PRIOR_TEXT_DAYS_ONLY", {
      days: PostDaysPriorToDueDate,
    });
  };

  return {
    getPostPriorText: getPostPriorText,
  };
}
