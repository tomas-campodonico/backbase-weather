/**
 * Forecast controller
 */
;(function() {

  angular
    .module('backbase')
    .controller('ForecastController', ForecastController);

  ForecastController.$inject = ['Weather', '$routeParams', 'config'];


  function ForecastController(Weather, $routeParams, config) {
    var ctrl = this;

    function formatData(data) {
      data.forecast = data.forecast.map(function(hourlyFourcast) {
        return {
          hour: (new Date(hourlyFourcast.dt_txt)).getHours(),
          wind: hourlyFourcast.wind.speed,
          temp: hourlyFourcast.main.temp,
          icon: config.openweather.icon + hourlyFourcast.weather[0].icon + '.png',
          condition: hourlyFourcast.weather[0].description
        }
      });

      return data;
    }

    Weather.getCityForecast($routeParams.city, function(err, data) {
      if (err) {
        return;
      }
      ctrl.data = formatData(data);
    });
  }


})();