angular
.module('weatherApp')
.component('people', {
  bindings:
    {
      people: '<'
    },

  templateUrl: 'components/peopleDetails.html'
})
