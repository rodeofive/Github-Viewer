// $http service

(function () {

    var app = angular.module("githubViewer", []);

    // The $http object returns a promise object
    var PersonController = function ($scope, $http) {

        var onUserComplete = function (response) {
            $scope.githubUser = response.data;
        };

        var onError = function(reason) {
            $scope.error = "Could not fetch Github User";
        };

        $http.get("https://api.github.com/users/rodeofive")
            .then(onUserComplete, onError);

        // The above code is the shortened version of the following code

        //var personPromise = $http.get("/users/13");
        //personPromise.then(function(response) {
        //    $scope.user = response.data;
        //});
    };

    var MainController = function ($scope) {
        var person = {
            firstName: "Brian",
            lastName: "Gruver",
            age: 41
        };
        $scope.person = person;
        $scope.message = "Hello Angular!";
    };

    app.controller("MainController", MainController);
    app.controller("PersonController", PersonController);

}());

