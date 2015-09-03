(function () {
    'use strict';

    angular
        .module('app.github')
        //.module('githubViewer')
        .controller('repoController', repoController);

    function repoController($scope, github, $routeParams, $filter) {
        //var onError = function (reason) {
        //    console.log('error in repoController');
        //    $scope.error = "Could not fetch data";
        //};

        //var onFoundRepository = function (data) {
        //    $scope.repository = data;
        //};

        $scope.getByRepoName = function (userName, repositoryName) {
            console.log($scope.githubUser);
            var found = $filter('getByRepoName')(userName, repositoryName);
            console.log(found);
            $scope.selected = JSON.stringify(found);
        };

        $scope.getByRepoName($routeParams.githubUserName, $routeParams.repositoryName);

        console.log($scope.githubUserName + ' -- ' + $scope.repositoryName);
        ////github.getRepository($scope.githubUserName, $scope.repoName).then(onFoundRepository, onError);
    };

}());

