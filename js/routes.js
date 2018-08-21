(function () {
    'use strict';
    angular.module('app').run(['$rootScope', '$state',
        function ($rootScope, $state) {
            $rootScope.$state = $state;
            $rootScope.$on('$stateChangeSuccess', function () {
                window.scrollTo(0, 0);
            });
            FastClick.attach(document.body);
        },
    ]).config(function ($stateProvider, $urlRouterProvider, $qProvider, $locationProvider) {
        if (window.history && window.history.pushState) {
            $locationProvider.html5Mode(true);
        }
        $qProvider.errorOnUnhandledRejections(false);
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                name: 'home',
                url: '/home',
                templateUrl: "views/main.html",
                

                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            insertBefore: '#load_styles_before',
                            files: ['libs/owl.carousel.min.css', 'css/home.css']
                        }, {
                            name: 'owlcarousel',
                            files: ['libs/owl.carousel.min.js']
                        }]).then(function () {
                            return $ocLazyLoad.load('js/controller/home.js');
                        });
                    }]
                },
                title: 'Home',
            })
            .state('page1', {
                name: 'page1',
                url: '/page1',
                templateUrl: "views/page1.html",
                title: 'Page 1',
            })
            .state('page2', {
                url: '/page2',
                templateUrl: 'views/page2.html',               
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            insertBefore: '#load_styles_before',
                            files: ['libs/owl.carousel.min.css']
                        }, {
                            name: 'owlcarousel',
                            files: ['libs/owl.carousel.min.js']
                        }]).then(function () {
                            return $ocLazyLoad.load('js/controller/page2.js');
                        });
                    }]
                },
                title: 'page2'
            });

    }).config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: false
        });
    }]);
}());