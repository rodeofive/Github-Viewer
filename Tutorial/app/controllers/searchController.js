(function () {
    'use strict';

    angular
        .module('app.github')
        //.module('githubViewer')
        .controller('SearchController', searchController);

    /* @ngInject */
    function searchController($interval, $location) {
        /*jshint validthis: true */
        var vm = this;

        $scope.userName = "angular";
        vm.countDown = 10;

        //var decrementCountdown = function() {
        //    $scope.countDown -= 1;
        //    if ($scope.countDown < 1) {
        //        $scope.searchForUser($scope.userName);
        //    }
        //};

        //// Service example code:
        //var countdownInterval = null;
        //var startCountdown = function() {
        //    countdownInterval = $interval(decrementCountdown, 1000, $scope.countDown);
        //};

        //$scope.searchForUser = function (userName) {
        //    // Service example code:
        //    if (countdownInterval) {
        //        $interval.cancel(countdownInterval);
        //        $scope.countDown = null;
        //    }
        //    $location.path("/user/" + userName);
        //};

        //startCountdown();
    };


}());

