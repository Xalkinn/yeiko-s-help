angular.module('yeiko').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/acceuil', {
            templateUrl: 'index.html',
            controller: 'yeikoController'
        })
        .when('/contact', {
            templateUrl: './templates/contact.html',
            controller: 'yeikoController'
        })
        .when('/starwars', {
            templateUrl: './templates/starwars.html',
            controller: 'yeikoController'
        })
        .when('/numerique', {
            templateUrl: './templates/numerique.html',
            controller: 'yeikoController'
        });

    $routeProvider.otherwise({
        redirectTo: '/acceuil'
    });
}]);