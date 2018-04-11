Ext.define('Beerhere.view.Beers', {
    extend: 'Ext.Container',
    xtype: 'beers',

    scrollable: true,
    cls: 'dashboard',

    style: 'background: transparent;',

    requires: [
        'Beer.BeerTile',
    ],

    defaults: {
        xtype: 'beertile',
        height: 355,
        userCls: 'big-50 small-100 dashboard-item',
        minWidth: 355,
    },
});
