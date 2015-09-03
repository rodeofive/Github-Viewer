(function () {

    var app = angular.module("app", ["ngRoute", "ngResource", "ui.bootstrap", 'app.github']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/main',
            {
                controller: "SearchController",
                templateUrl: "/app/views/main.html"
            })
            //Define a route that has a route parameter in it (:customerID)
            .when('/user/:githubUserName',
            {
                controller: 'userController',
                templateUrl: '/app/views/repositories.html'
            })

            .when('/repo/:githubUserName/:repositoryName',
            {
                controller: 'repoController',
                templateUrl: '/app/views/repositoryDetails.html'
            })

            .otherwise({ redirectTo: "/main" });
    });

    app.filter('getByRepoName', function () {
        return function (input, name) {
            var i = 0, len = input.length;
            for (; i < len; i++) {
                console.log(input[i].name);
                if (+input[i].name == +name) {
                    return input[i];
                }
            }
            return null;
        }
    });

}());
