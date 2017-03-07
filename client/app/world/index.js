'use strict';

import angular from 'angular';
import routes from './world.routes';
import WorldController from './world.controller';

export default angular.module('achieveplayServerApp.world', ['achieveplayServerApp.design','ui.router'])
  .config(routes)
  .controller('WorldController', WorldController)
  .name;
