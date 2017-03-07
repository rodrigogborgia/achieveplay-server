'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('world', {
    url: '/world',
    template: require('./world.html'),
    controller: 'WorldController',
    controllerAs: 'vm',
    authenticate: 'admin'
  });
}
