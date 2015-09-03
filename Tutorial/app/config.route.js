(function () {
    'use strict';

    angular
        .module('app.github')
        .run(appRun);

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/main',
                config: {
                    templateUrl: '/app/views/main.html',
                    controller: 'SearchController',
                    controllerAs: 'vm',
                    title: 'search',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-lock"></i> Avengers'
                    }
                }
            },
            {
                url: '/user/:githubUserName',
                config: {
                    templateUrl: '/app/views/repositories.html',
                    controller: 'userController',
                    controllerAs: 'vm',
                    title: 'user',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Avengers'
                    }
                }
            },
            {
                url: '/repo/:githubUserName/:repositoryName',
                config: {
                    templateUrl: '/app/views/repositoryDetails.html',
                    controller: 'repoController',
                    controllerAs: 'vm',
                    title: 'repo',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Avengers'
                    }
                }
            }
        ];
    }
})();