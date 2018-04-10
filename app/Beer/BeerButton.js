Ext.define('Beer.BeerButton', {
    extend: 'Ext.Button',
    xtype: 'beerbutton',
    border: false,
    layout: 'fit',

    cls: 'beerbutton',
    controller: 'beertile',

    config: {
        href: null
    },

    handler: 'onBeerButtonClick'
    
});
