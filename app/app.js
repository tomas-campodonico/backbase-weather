;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('backbase', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  /**
   * App routing
   */
  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $routeProvider
      .when('/', {
        controller: 'MainController',
        controllerAs: 'vm',
        templateUrl: 'app/views/home.html'
      })

      .when('/forecast', {
        controller: 'ForecastController',
        controllerAs: 'vm',
        templateUrl: 'app/views/forecast.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.interceptors.push('authInterceptor');

  }


  angular
    .module('backbase')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', '$location'];

  function authInterceptor($rootScope, $q, $location) {

    return {

      // intercept every request
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }


  /**
   * Run block
   */
  angular
    .module('backbase')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {
    console.log('app starting');
  }


})();