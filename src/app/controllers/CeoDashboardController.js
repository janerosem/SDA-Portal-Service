(function(){

  angular
    .module('app')
    .controller('CeoDashboardController', [ 'monthlyLeadService',
      CeoDashboardController
    ]);

  function CeoDashboardController(monthlyLeadService) {
      var vm = this;

      vm.model = {
          runRate:{
              current:5.12,
              yesterday:570,
              increase:true
          },
          revenueChurn:{
              current:3.25,
              yesterday:4,
              increase:false
          },
          netPromoterScore:{
              current:30,
              lastMonth:13,
              increase:true
          },
          salesIncrease:{
              current:12,
              lastMonth:3,
              increase:true
          },
          monthlyLeads:{
              current:1000

          },
          monthlyOpportunities :{

          }
      };
      monthlyLeadService.setCurrentMonthlyLead(2200);
      monthlyLeadService.setCurrenMonthlyOpportunities(1200);
  }

})();
