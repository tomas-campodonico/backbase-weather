/**
 * Weather service
 */
;(function() {

  angular
    .module('backbase')
    .factory('Weather', WeatherService);

  WeatherService.$inject = ['config', '$q', '$http', '$httpParamSerializer'];


  function WeatherService(config, $q, $http, $httpParamSerializer) {

    /**
     * Build API url for endpoint
     * @type String
     */
    function getAPIEndpoint(endpoint, city) {
      var service = config.openweather.host + config.openweather[endpoint];
      var qs = $httpParamSerializer({
        appid: config.openweather.appid,
        units: config.openweather.units,
        q: city
      });

      return service + '?' + qs;
    }


    var service = {
      getAll: function(cb) {
        var requests = [];
        var responses = [];

        // Send requests
        config.cities.forEach(function(city) {
          var deferred = $q.defer();
          requests.push(deferred);
          $http.get(getAPIEndpoint('SUMMARY_ENDPOINT', city.code))
            .then(function(res) {
              city.wind = res.data.wind.speed;
              city.temp = res.data.main.temp;
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
      },

      getCityForecast(city, cb) {
        $http.get(getAPIEndpoint('FORECAST_ENDPOINT', city))
          .then(function(res) {
            cb(null, {
              city: res.data.city,
              forecast: res.data.list.slice(0, 4)
            });
          })
          .catch(function(err) {
            cb(err);
          });
      }
    };

    return service;
  }


})();