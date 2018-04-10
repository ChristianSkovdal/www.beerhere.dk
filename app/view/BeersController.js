Ext.define('Beerhere.view.BeersController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.beers',

    listen: {
        component: {
            'beers' : {
                initialize: 'init'
            }
        },
    },

    init() {
        debugger;
    }


});
