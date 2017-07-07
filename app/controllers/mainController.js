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

    ctrl.cities = [{
      name: 'London'
    }, {
      name: 'Paris'
    }, {
      name: 'Amsterdam'
    }, {
      name: 'Dublin'
    }, {
      name: 'Cardiff'
    }];


    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
    Weather.getAll(this.cities, function(data) {
      ctrl.cities = data;
    });
  }


})();