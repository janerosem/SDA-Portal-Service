(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
        {
            name:'CEO DashBoard',
            icon:'dashboard',
            sref:'.ceo-dashboard'      // comes in the url
        },
        {
            name:'Digital Marketing',
            icon:'dashboard',
            sref:'.digital-marketing-dashboard'
        },
        {
            name:'E-Commerce Marketing',
            icon:'dashboard',
            sref:'.not-yet-implemented'
        },
        {
            name:'Marketing Dashboard',
            icon:'dashboard',
            sref:'.not-yet-implemented'
        },
        {
            name:'KPIs',
            icon:'dashboard',
            sref:'.not-yet-implemented'
        },
        {
            name:'Profile',
            icon:'person',
            sref:'.not-yet-implemented'
        },
        {
            name:'Table',
            icon:'view_module',
            sref:'.not-yet-implemented'
        },
        {
            name:'Data Table',
            icon:'view_module',
            sref:'.not-yet-implemented'
        }
    ];

      return {
          loadAllItems:function () {
              return $q.when(menuItems);
          }
      };
  }

})();
