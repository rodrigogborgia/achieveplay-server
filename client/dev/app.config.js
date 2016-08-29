;(function(ng) {
  'use strict';

  ng.module('AchievePlay')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));
