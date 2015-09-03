(function () {

    var app = angular.module("githubViewer", []);

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

}());

