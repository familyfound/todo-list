
var angular = require('angularjs')
  , ffapi = require('ffapi')
  , todo = require('todo')

  , template = require('./template');

angular.module('todo-list', ['todo', 'ffapi'])
  .directive('todoList', function (ffapi) {
    return {
      scope: {},
      replace: true,
      restrict: 'A',
      template: template,
      link: function (scope, element, attrs) {
        var name = attrs.todoList;
        scope.$watch('todos', function(value) {
          scope.$parent[name] = value;
        });
        scope.$parent.$watch(name, function (value) {
          scope.todos = value;
        });
        scope.removeTodo = function (todo) {
          var i = scope.todos.indexOf(todo);
          if (i === -1) {
            console.warn('Todo not found', todo, scope.todos);
            return;
          }
          scope.todos.splice(i, 1);
          ffapi('todos/remove', {id: todo._id});
          scope.$parent.$digest();
        };
      }
    };
  });

