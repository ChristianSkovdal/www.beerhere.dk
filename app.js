Ext.application({
    name: 'Beerhere',

    extend: 'Ext.app.Application',

    launch: function () {

    },

    requires: [
        'Beerhere.view.Main'
    ],

    mainView: 'Beerhere.view.Main'
});
