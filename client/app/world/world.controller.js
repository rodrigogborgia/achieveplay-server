'use strict';
export default class WorldController {
    /*@ngInject*/
    constructor(World, Auth) {
        // Use the World $resource to fetch all worlds
        this.worlds = World.query();
        this.isLoggedIn = Auth.isLoggedInSync;
        this.isAdmin = Auth.isAdminSync;
        this.currentUser = Auth.getCurrentUserSync;
    }
    delete(world) {
        world.$remove();
        this.worlds.splice(this.worlds.indexOf(world), 1);
    }
}