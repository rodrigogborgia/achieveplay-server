'use strict';

export function WorldResource($resource) {
    'ngInject';
    return $resource('/api/worlds/:id', {
        id: '@_id'
    }, {
        getMine: {
            method: 'GET',
            params: {
                id: 'mine'
            }
        }
    });
}