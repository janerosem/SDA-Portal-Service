'use strict';

angular.module('app')
  .directive('gauge', function() {
        return {
            restrict:'E',
            scope: {
                gaugeName: '@',
                maxValue: '@',
                type: '@',
                id: '@'
            },
            template:'<div style="width: 100%; height: 400px; margin: 0 auto">'+
                        '<div id="{{id}}" style="width: 80%; height: 80%;"></div>'+
                     '</div>',
            controller:function ($scope, monthlyLeadService) {
//                alert($scope.current);

                switch($scope.type) {
                    case "Opportunities":
                        $scope.current = monthlyLeadService.getCurrentMonthlyOpportunities();
                        break;
                    case "Leads":
                        $scope.current = monthlyLeadService.getCurrentMonthlyLead();
                        break;
                    default:
                        break;

                }
                var gaugeOptions = {

                    chart: {
                        type: 'solidgauge'
                    },

                    title: null,

                    pane: {
                        center: ['50%', '85%'],
                        size: '140%',
                        startAngle: -90,
                        endAngle: 90,
                        background: {
                            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                            innerRadius: '60%',
                            outerRadius: '100%',
                            shape: 'arc'
                        }
                    },

                    tooltip: {
                        enabled: true
                    },

                    // the value axis
                    yAxis: {
                        stops: [
                            [0.1, '#55BF3B'], // green
                            [0.5, '#DDDF0D'], // yellow
                            [0.9, '#DF5353'] // red
                        ],
                        lineWidth: 0,
                        minorTickInterval: null,
                        tickAmount: 2,
                        title: {
                            y: -70
                        },
                        labels: {
                            y: 16
                        }
                    },

                    plotOptions: {
                        solidgauge: {
                            dataLabels: {
                                y: 5,
                                borderWidth: 0,
                                useHTML: true
                            }
                        }
                    }
                };

// The speed gauge
//                alert($scope.gaugeName);
                var chartSpeed = Highcharts.chart($scope.id, Highcharts.merge(gaugeOptions, {
                    yAxis: {
                        min: 0,
                        max: parseInt($scope.maxValue),
                        title: {
                            text: $scope.gaugeName
                        }
                    },

                    credits: {
                        enabled: false
                    },

                    series: [{
                        name: $scope.gaugeName,
                        data: [parseInt($scope.current)],
                        dataLabels: {
                            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                                '<span style="font-size:12px;color:silver"></span></div>'
                        },
                        tooltip: {
                            valueSuffix: ' '
                        }
                    }]

                }));

// The RPM gauge
//                var chartRpm = Highcharts.chart('container-rpm', Highcharts.merge(gaugeOptions, {
//                    yAxis: {
//                        min: 0,
//                        max: 5,
//                        title: {
//                            text: 'RPM'
//                        }
//                    },
//
//                    series: [{
//                        name: 'RPM',
//                        data: [1],
//                        dataLabels: {
//                            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
//                                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
//                                '<span style="font-size:12px;color:silver">* 1000 / min</span></div>'
//                        },
//                        tooltip: {
//                            valueSuffix: ' revolutions/min'
//                        }
//                    }]
//
//                }));

// Bring life to the dials
//                setInterval(function () {
//                    // Speed
//                    var point,
//                        newVal,
//                        inc;
//
//                    if (chartSpeed) {
//                        point = chartSpeed.series[0].points[0];
//                        inc = Math.round((Math.random() - 0.5) * 100);
//                        newVal = point.y + inc;
//
//                        if (newVal < 0 || newVal > 200) {
//                            newVal = point.y - inc;
//                        }
//
//                        point.update(newVal);
//                    }
//
//                    // RPM
////                    if (chartRpm) {
////                        point = chartRpm.series[0].points[0];
////                        inc = Math.random() - 0.5;
////                        newVal = point.y + inc;
////
////                        if (newVal < 0 || newVal > 5) {
////                            newVal = point.y - inc;
////                        }
////
////                        point.update(newVal);
////                    }
//                }, 2000);
            }
        };
  });
