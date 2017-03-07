'use strict';

import angular from 'angular';
import constants from '../../app/app.constants';
import util from '../util/util.module';
import ngCookies from 'angular-cookies';
import uiRouter from 'angular-ui-router';
import {
  WorldResource
} from './world.service';

export default angular.module('achieveplayServerApp.design', [constants, util, ngCookies, uiRouter])
  .factory('World', WorldResource)
  .name;
