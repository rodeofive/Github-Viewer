(function () {
    'use strict';

    angular
        .module('app.core')
        .service('github', github);

    /* @ngInject */
    function github($http, $q, exception, logger) {
        var readyPromise;
        var ds = this;
        ds.getUser = getUser;
        ds.getRepositories = getRepositories;
        ds.getContributors = getContributors;
        ds.getRepository = getRepository;
        ds.ready = ready;


        // Get user information
        var getUser = function (userName) {
            return callApi("https://api.github.com/users/" + userName, 'getUser');
        };

        // Get all repositories for a user
        var getRepositories = function (githubUser) {
            return callApi(githubUser.repos_url, 'getRepositories');
        };

        // Get all contributors for a single repository
        var getContributors = function (githubUser) {
            return callApi(githubUser.contributors_url, 'getContributors');
        };

        var getRepository = function (userName, repoName) {
            return callApi("https://api.github.com/repos/" + userName + "/" + repoName, 'getRepository');
        };

        //// External API
        //return {
        //    getContributors: getContributors,
        //    getRepos: getRepositories,
        //    getRepository: getRepository,
        //    getUser: getUser
        //};

        function callApi(url, serviceName) {
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (message) {
                    exception.catcher('XHR Failed for ' + serviceName)(message);
                });;
        }

        function getReady() {
            if (!readyPromise) {
                // Apps often pre-fetch session data ("prime the app")
                // before showing the first view.
                // This app doesn't need priming but we add a
                // no-op implementation to show how it would work.
                logger.info('Primed the app data');
                readyPromise = $q.when(ds);
            }
            return readyPromise;
        }

        function ready(promisesArray) {
            return getReady()
                .then(function () {
                    return promisesArray ? $q.all(promisesArray) : readyPromise;
                })
                .catch(exception.catcher('"ready" function failed'));
        }
    }

    ///* @ngInject */
    //function Dataservice($http, $q, exception, logger) {
    //    var readyPromise;
    //    var ds = this;
    //    ds.getAvengers = getAvengers;
    //    ds.getAvengersCast = getAvengersCast;
    //    ds.ready = ready;

    //    function getAvengers() {
    //        return $http.get('/api/maa')
    //            .then(function (response) {
    //                return response.data;
    //            })
    //            .catch(function (message) {
    //                exception.catcher('XHR Failed for getAvengers')(message);
    //            });
    //    }

    //    function getAvengersCast() {
    //        return $http.get('/api/maaCast')
    //            .then(function (response) {
    //                return response.data;
    //            })
    //            .catch(function (message) {
    //                exception.catcher('XHR Failed for getAvengersCast')(message);
    //            });
    //    }

    //    function getReady() {
    //        if (!readyPromise) {
    //            // Apps often pre-fetch session data ("prime the app")
    //            // before showing the first view.
    //            // This app doesn't need priming but we add a
    //            // no-op implementation to show how it would work.
    //            logger.info('Primed the app data');
    //            readyPromise = $q.when(ds);
    //        }
    //        return readyPromise;
    //    }

    //    function ready(promisesArray) {
    //        return getReady()
    //            .then(function () {
    //                return promisesArray ? $q.all(promisesArray) : readyPromise;
    //            })
    //            .catch(exception.catcher('"ready" function failed'));
    //    }

    //}
})();
