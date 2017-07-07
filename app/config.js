;(function() {


  /**
   * Place to store app configurations
   */
  angular
    .module('backbase')
    .constant('config', {
      openweather: {
        host: 'http://api.openweathermap.org/data/2.5/',
        appid: '8cd37f9fdb4f8d117eae329ec175fa87',
        units: 'metric',
        icon: 'http://openweathermap.org/img/w/',
        SUMMARY_ENDPOINT: 'weather',
        FORECAST_ENDPOINT: 'forecast'
      },
      cities: [{
        name: 'London',
        code: 'London,uk'
      }, {
        name: 'Paris',
        code: 'Paris,fr'
      }, {
        name: 'Amsterdam',
        code: 'Amsterdam,nl'
      }, {
        name: 'Dublin',
        code: 'Dublin,ie'
      }, {
        name: 'Cardiff',
        code: 'Cardiff,uk'
      }]
    });


})();