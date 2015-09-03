// directives

(function () {

    var app = angular.module("githubViewer", []);

    // The $http object returns a promise object
    var searchController = function ($scope, $http) {

        var onError = function (reason) {
            $scope.error = "Could not fetch data";
        };

        var onFoundGithubUser = function (response) {
            $scope.githubUser = response.data;

            $http.get($scope.githubUser.repos_url)
                .then(loadRepos, onError);
        };

        var loadRepos = function(response) {
            $scope.repos = response.data;
        };

        $scope.searchForUser = function (userName) {
            $http.get("https://api.github.com/users/" + userName)
                .then(onFoundGithubUser, onError);
        };

        $scope.userName = "angular";
        $scope.repoSortBy = 'stargazers_count'; // set the default sort type
        $scope.sortReverse = true;  // set the default sort order
    };

    app.controller("searchController", ["$scope", "$http", searchController]);

}());

