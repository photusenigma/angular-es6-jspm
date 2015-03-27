import angular from 'angular';

import { TodoService } from './TodoService';
import { TodoCtrl } from './TodoCtrl';

import todoTemplate from './todo.html.tmpl!text';

let todoModule = angular.module('todoModule', [])
    .service('TodoService', TodoService)
    .controller('TodoCtrl', TodoCtrl);

todoModule.routeInfo = { template: todoTemplate, controller: 'TodoCtrl', controllerAs: 'tc' };

export { todoModule };
