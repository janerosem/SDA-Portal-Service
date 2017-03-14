(function(){
  'use strict';

  angular.module('app')
        .service('monthlyLeadService', [
        '$q',
      monthlyLeadService
  ]);

  function monthlyLeadService($q){
    var currentMonthlyLead = 0;
    var currentMonthlyOpportunities=0

    return {
        setCurrentMonthlyLead:function (value) {
            currentMonthlyLead = value;
        },
        getCurrentMonthlyLead:function () {

            return currentMonthlyLead;
        },
        setCurrenMonthlyOpportunities:function (value) {
            currentMonthlyOpportunities = value;
        },
        getCurrentMonthlyOpportunities:function () {
            return currentMonthlyOpportunities;
        }
    };
  }
})();
