(function () {
    'use strict';

    var modules = [];
    angular.module('app.userService', modules)
            .service('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {

        var service = {
            verifyUser: verifyUser
        };

        function verifyUser(user, onSuccess, onError) {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/minisissII/api/user/',
                data: user
            }).then(onSuccess, onError);
        };
        return service;
    };
})();