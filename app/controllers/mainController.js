/**
 * Main application controller
 */
;(function() {

  angular
    .module('backbase')
    .controller('MainController', MainController);

  MainController.$inject = ['Weather'];


  function MainController(Weather) {
    var ctrl = this;

    /**
     * Load cities data
     */
    Weather.getAll(function(cities) {
      ctrl.cities = cities;
    });
  }


})();