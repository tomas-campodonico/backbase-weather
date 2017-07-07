/**
 * Weather service
 */
;(function() {

  angular
    .module('backbase')
    .factory('Weather', WeatherService);

  WeatherService.$inject = ['config', '$q', '$http'];


  function WeatherService(config, $q, $http) {
    var service = {
      getAll: function(cities, cb) {
        var requests = [];
        var responses = [];

        // Send requests
        cities.forEach(function(city) {
          var deferred = $q.defer();
          requests.push(deferred);
          $http.get(config.api_url + 'q=London,uk&')
            .then(function(res) {
              city.data = res.data;
              responses.push(city);
              deferred.resolve();
            })
            .catch(function(err) {
              deferred.reject();
            });
        });

        $q.all(requests).then(function() {
          cb(responses);
        });
      }
    };

    return service;
  }


})();