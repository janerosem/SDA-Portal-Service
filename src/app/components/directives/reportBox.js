'use strict';

angular.module('app')
  .directive('reportBox', function() {
        return {
            restrict:'E',
            scope: {
                mainFigure: '=',
                subFigure: '=',
                direction: '=',
                type: '=',
                options: '@'
            },
            template:'<div class="report-box">' +
                        '<div>' +
                            '<span ng-if="type===\'currency\'" class="report-box-message">$</span>' +
                            '<span class="report-box-main-figure">{{mainFigure}}</span>' +
                            '<span ng-if="type===\'currency\'" class="report-box-message">M</span>' +
                            '<span ng-if="type===\'percent\'" class="report-box-message">%</span>' +
                        '</div>' +
                        ' <div ng-if="type !== \'graph\'">' +
                            '<span ng-if="type===\'currency\'" class="report-box-message">' +
                                '<span ng-class="{true:\'font-color-green\', false:\'font-color-red\'}[direction]">$</span>' +
                            '</span>' +
                            '<span ng-class="{true:\'report-box-sub-increase-figure\', false:\'report-box-sub-decrease-figure\'}[direction]">{{subFigure}}</span>'+
                            '<span ng-if="type===\'percent\'" class="report-box-message">' +
                                '<span ng-class="{true:\'font-color-green\', false:\'font-color-red\'}[direction]">%</span>' +
                            '</span>' +
                    '</div>',
            controller:function () {

            }
        };
  });
