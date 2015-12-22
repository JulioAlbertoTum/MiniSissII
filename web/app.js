(function () {
    'use strict';
    var modules = [
        'ngNewRouter',
        'app.userLogin',
        'app.userService'
    ];
    
    angular.module('app', modules).controller('AppController', AppController);

    AppController.$inject = ['$router'];
    
    function AppController($router) {
        $router.config([
            {
                path: '/', redirectTo: '/userLogin'
            },
            {
                path: '/userLogin', component: 'userLogin'
            }
        ]);
    };
})();


