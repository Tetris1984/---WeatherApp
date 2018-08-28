angular
.module('weatherApp')
.component('hello', {
  template:  '<h3>{{$ctrl.greeting}} solar sytem!</h3>',

  controller: function() {
    this.greeting = 'hello';

    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
    }
  }
})
