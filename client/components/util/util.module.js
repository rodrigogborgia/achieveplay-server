'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('achieveplayServerApp.util', [])
  .factory('Util', UtilService)
  .name;
