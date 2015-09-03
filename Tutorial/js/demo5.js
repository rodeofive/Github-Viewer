// directives

(function () {

    var app = angular.module("githubViewer", []);

    // The $http object returns a promise object
    var searchController = function ($scope, $http, $interval, $log, $anchorScroll, $location) {

        var onError = function (reason) {
            $scope.error = "Could not fetch data";
        };

        var loadRepos = function (response) {
            $scope.repos = response.data;
            $location.hash("UserDetails");
            $anchorScroll(); // Check out ngSmoothScroll for smooth scrolling: https://github.com/d-oliveros/ngSmoothScroll
        };

        var onFoundGithubUser = function (response) {
            $scope.githubUser = response.data;

            $http.get($scope.githubUser.repos_url)
                .then(loadRepos, onError);
        };

        
        var decrementCountdown = function() {
            $scope.countDown -= 1;
            if ($scope.countDown < 1) {
                $scope.searchForUser($scope.userName);
            }
        };

        // Service example code:
        var countdownInterval = null;
        var startCountdown = function() {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countDown);
        };

        $scope.searchForUser = function (userName) {
            $log.info("Searching for Github user " + userName);
            $http.get("https://api.github.com/users/" + userName)
                .then(onFoundGithubUser, onError);

            // Service example code:
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countDown = null;
            }
        };

        $scope.userName = "angular";
        $scope.repoSortBy = 'stargazers_count'; // set the default sort type
        $scope.sortReverse = true;  // set the default sort order
        $scope.countDown = 5;
        startCountdown();
    };

    app.controller("searchController", ["$scope", "$http", "$interval", "$log", "$anchorScroll", "$location", searchController]);

}());

