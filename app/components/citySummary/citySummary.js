/**
 * City summary component
 */
;(function() {

  angular
    .module('backbase')
    .component('citySummary', {
      templateUrl: '/city-summary.html',
      bindings: {
        city: '='
      },
      controllerAs: 'vm'
  });


})();