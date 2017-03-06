angular.module('app.services', [])

.service('Tasks', function ($http) {

  this.getAll = function (cb) {
    return $http({
      method: 'GET',
      url: '/api/tasks'
    }).then(function (response) {
      console.log('retrieved data from db: ', response);
      cb(response);
      return response;
    });
  };

  this.addTask = function (task) {
    return $http({
      method: 'POST',
      url: '/api/tasks',
      data: task
    }).then(function (err, response) {
      if (err) {
        console.log('error: ', err);
      } else {
        console.log('successful post');
      }
    });
  };

});