/**
 * City summary component
 */
;(function() {

  angular
    .module('backbase')
    .component('citySummary', {
      templateUrl: 'app/components/citySummary/citySummary.html',
      bindings: {
        city: '='
      },
      controllerAs: 'vm'
  });


})();