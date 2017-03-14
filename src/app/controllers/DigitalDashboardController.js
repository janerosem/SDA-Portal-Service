(function(){

  angular
    .module('app')
    .controller('DigitalDashboardController', [ 'monthlyLeadService',
      CeoDashboardController
    ]);

  function CeoDashboardController(monthlyLeadService) {
      var vm = this;

      vm.model = {
          websiteSessions:{
              current:"539.4K"
          },
          currentVisitors:{
              count:"376"
          },
          bounceRate:{
              current:"72.25",
              yesterday:13,
              increase:false
          },
          salesIncrease:{
              current:12,
              lastMonth:3,
              increase:true
          },
          fbPageViews: {
              current: "5,781",
              lastMonth: "5204",
              increase: true
          },
          twitterFollowers: {
              current: "7,018",
              change: "1",
              increase: false
          },
          newsLetterOpenRate: {
              current: "20.14",
              change: "77",
              increase: true
          }
      };
      monthlyLeadService.setCurrentMonthlyLead(2200);
      monthlyLeadService.setCurrenMonthlyOpportunities(1200);
  }



})();
