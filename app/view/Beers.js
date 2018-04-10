Ext.define('Beerhere.view.Beers', {
    extend: 'Ext.Container',
    xtype: 'beers',

    controller: 'beers',

    scrollable: true,
    cls: 'dashboard',

    style: 'background: transparent;',

    requires: [
        'Beer.BeerTile',
        'Beerhere.view.BeersController'
    ],

    defaults: {
        xtype: 'beertile',
        height: 355,
        userCls: 'big-50 small-100 dashboard-item',
        minWidth: 355,
    },
});
