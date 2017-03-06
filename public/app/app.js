var app = angular.module('app', ['app.services', 'app.calendar', 'ngRoute']);

app.config(function ($routeProvider, $httpProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/calendar/calendar.html',
    controller: 'CalendarController'
  });
});
