
var angular = require('angularjs')
  , todoList = require('todo-list')

  , log = require('domlog');

log.init();

angular.module('test', ['todo-list'])
  .factory('ffapi', function () {
    return function (name, params, next) {
      log('call made', name, params, next);
      if (name == 'todos/add') {
        setTimeout(function () {
          next({id: '234tre'});
        }, 0);
      }
    };
  });

function Test($scope) {
  $scope.todos = [{
    _id: '12434jJLKFSDf',
    completed: false,
    type: 'General',
    title: 'Fix all my stuff',
    owned: false,
    watching: true
  }, {
    _id: 'QWEIOPERsdfssf',
    completed: true,
    type: 'Find Record',
    title: 'marriage',
    owned: true,
    watching: false
  }, {
    _id: 'QWEIOPERsdfssf',
    completed: true,
    type: 'Find Record',
    title: 'other',
    owned: true,
    watching: false
  }, {
    _id: 'QWEIOPERsdfssf',
    completed: true,
    type: 'Find Record',
    title: 'birth',
    owned: true,
    watching: false
  }];
}
