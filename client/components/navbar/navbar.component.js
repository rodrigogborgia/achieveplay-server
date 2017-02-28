'use strict';
/* eslint no-sync: 0 */
import angular from 'angular';
/**
 * NavBar Component Class
 */
export class NavbarComponent {
    /**
     * menu static array for the navbar
     * 
     * @type {Array} an array of objects with title, icon, role, state properties
     */
    menu = [{
        title: 'Home',
        icon: 'fa-home',
        role: '*',
        state: 'main'
    }, {
        title: 'Creador',
        icon: 'fa-superpowers',
        role: 'admin',
        state: '-',
        sub: [{
            title: 'Opciones del sistema',
            icon: 'fa-cog',
            state: 'main'
        }, {
            title: 'Mundos',
            icon: 'fa-globe',
            state: 'main'
        }, {
            title: 'Usuarios',
            icon: 'fa-users',
            state: 'admin'
        }, {
            title: 'Nuevo Usuario',
            icon: 'fa-user-plus',
            state: 'signup'
        }, {
            title: 'Ayuda',
            icon: 'fa-question',
            state: 'main'
        }]
    }, {
        title: 'Director',
        icon: 'fa-bullhorn',
        role: 'user',
        state: '-',
        sub: [{
            title: 'Opciones del juego',
            icon: 'fa-cog',
            state: 'main'
        }, {
            title: 'Indicadores',
            icon: 'fa-line-chart',
            state: 'main'
        }, {
            title: 'Rankings',
            icon: 'fa-list-ol',
            state: 'main'
        }, {
            title: 'Directivas',
            icon: 'fa-gavel',
            state: 'main'
        }, {
            title: 'Equipos',
            icon: 'fa-users',
            state: 'main'
        }, {
            title: 'Misiones',
            icon: 'fa-exclamation-circle',
            state: 'main'
        }, {
            title: 'Acceso de Aplicaciones',
            icon: 'fa-mobile',
            state: 'main'
        }, {
            title: 'Despliegue',
            icon: 'fa-rocket',
            state: 'main'
        }, {
            title: 'Estad&iacute;sticas',
            icon: 'fa-pie-chart',
            state: 'main'
        }]
    }];
    /**
     * Class Constructor
     * 
     * @param  AuthService Auth The service to call for user authentication
     */
    constructor(Auth) {
        'ngInject';
        this.isLoggedIn = Auth.isLoggedInSync;
        this.isAdmin = Auth.isAdminSync;
        this.currentUser = Auth.getCurrentUserSync;
    }
    /**
     * Verifies that the menu role has acces concerning the current user
     * 
     * @param  Object item The menu item (and possibly subitems)
     * 
     * @return boolean TRUE if it has access, false if it doesn't
     */
    checkAccess(item) {
        var res = false;
        var role = item && item.role ? item.role : 'invalid';
        switch (role) {
            case 'admin':
                res = this.isLoggedIn() && this.isAdmin();
                break;
            case 'user':
                res = this.isLoggedIn();
                break;
            case '*':
                res = true;
                break;
            default:
                res = false;
        }
        return res;
    }
}
export default angular.module('directives.navbar', []).component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
}).name;