Ext.define('Beerhere.view.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Beerhere',
    },

    stores: {
        beers: {
            storeId: 'beers',
            model: 'Beer',
            autoLoad: true,
            listeners: {
                load: 'onBeerStoreLoad'
            }
        }
    }
});
