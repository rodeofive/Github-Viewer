(function () {
    var github = function ($http) {

        function callApi(url) {
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        // Get user information
        var getUser = function (userName) {
            return callApi("https://api.github.com/users/" + userName);
        };

        // Get all repositories for a user
        var getRepositories = function (githubUser) {
            return callApi(githubUser.repos_url);
        };

        // Get all contributors for a single repository
        var getContributors = function (githubUser) {
            return callApi(githubUser.contributors_url);
        };

        var getRepository = function(userName, repoName) {
            return callApi("https://api.github.com/repos/" + userName + "/" + repoName);
        };

        // External API
        return {
            getContributors: getContributors,
            getRepos: getRepositories,
            getRepository: getRepository,
            getUser: getUser
        };
    }

    angular
        .module("app")
        .factory("github", github);
}());

// use repo.open_issues_count and repo.name
// Get owner object from repos_url. Use owner.login and owner.avatar_url