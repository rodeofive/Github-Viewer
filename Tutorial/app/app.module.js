(function () {
    'use strict';

    angular
        .module('app', [
            /*
             * Order is not important. Angular makes a
             * pass to register all of the modules listed
             * and then when app.dashboard tries to use app.data,
             * its components are available.
             */
            'ngRoute',
            'ngResource',
            'ui.bootstrap',
            /*
             * Everybody has access to these.
             * We could place these under every feature area,
             * but this is easier to maintain.
             */
            //'app.core',
            //'app.widgets',

            /*
             * Feature areas
             */
            'app.github'
            //'app.dashboard',
            //'app.layout'
        ]);

        //.config(function($routeProvider) {
        //    $routeProvider
        //        .when('/main',
        //        {
        //            controller: "SearchController",
        //            templateUrl: "/app/views/main.html"
        //        })
        //        //Define a route that has a route parameter in it (:customerID)
        //        .when('/user/:githubUserName',
        //        {
        //            controller: 'userController',
        //            templateUrl: '/app/views/repositories.html'
        //        })

        //        .when('/repo/:githubUserName/:repositoryName',
        //        {
        //            controller: 'repoController',
        //            templateUrl: '/app/views/repositoryDetails.html'
        //        })

        //        .otherwise({ redirectTo: "/main" });
        //    });

})();
