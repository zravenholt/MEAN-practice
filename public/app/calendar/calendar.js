angular.module('app.calendar', [])
  .controller('CalendarController', function ($scope, $location, Tasks) {

    $scope.todos = [];

    $scope.init = function () {
      console.log('init fired');
      Tasks.getAll(function (res) {
        $scope.todos = res.data;
      });
    };

    $scope.getAll = Tasks.getAll;

    $scope.addTask = function (task, day, time) {
      var taskObj = {
        task: task,
        day: day,
        time: time,
        complete: false
      };

      Tasks.addTask(taskObj);
    };

  });