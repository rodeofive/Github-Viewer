(function () {
    'use strict';

    angular
        .module('app.github')
        //.module('githubViewer')
        .controller('userController', userController);

    function userController($scope, github, $routeParams) {

        var onError = function (reason) {
            $scope.error = "Could not fetch data";
        };

        var loadRepos = function (data) {
            $scope.repos = data;
        };

        var onFoundGithubUser = function (data) {
            $scope.githubUser = data;
            github.getRepos($scope.githubUser).then(loadRepos, onError);
        };

        $scope.githubUserName = $routeParams.githubUserName;
        $scope.repoSortBy = 'stargazers_count'; // set the default sort type
        $scope.sortReverse = true;  // set the default sort order
        github.getUser($scope.githubUserName).then(onFoundGithubUser, onError);
    };

}());

