//Angular 

var portfolioApp = angular.module("portfolioApp", ['ui.router']);
//var portfolioApp = angular.module("portfolioApp", ['ui.router', 'mainController', 'searchController']);


portfolioApp.config( function($stateProvider, $urlRouterProvider, $locationProvider) {
   
   $urlRouterProvider.otherwise("/"); //provide for routes that don't exist

   //use stateProvider to template our routes
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/homeV2.html',
      //controller: 'mainController'
    })

    .state('my_portfolio', {
      url: '/portfolio',
      templateUrl: 'partials/my_portfolio.html'
      //controller: 'contactController'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'partials/contact.html'
      //controller: 'contactController'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'partials/about.html'
      //controller: 'aboutController'
    });

    //$locationProvider.html5Mode(true);
});
  
