Ext.Loader.setPath('Beer', '/app/Beer');
Ext.Loader.setPath('Tapsigns', '/app/Tapsigns');

Ext.application({
    name: 'Beerhere',

    extend: 'Ext.app.Application',

    launch: function () {

    },

    requires: [
        'Beerhere.view.Main'
    ],

    defaultToken : '/page/#',


    mainView: 'Beerhere.view.Main'
});
