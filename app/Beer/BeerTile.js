Ext.define('Beer.BeerTile', {
    extend: 'Ext.Container',
    xtype: 'beertile',

    requires: [
        'Ext.Img',
        'Beer.BeerTileController',
        'Beer.InfoTile',
        'Beer.NerdInfo',
        'Beer.BioTile',
        'Beer.BeerBar'
    ],

    controller: 'beertile',
    layout: 'fit',
    referenceHolder: true,
    shadow: true,

    config: {
        banner: null,
        footer: null,
        image: null,
        description: null,
        text: null,
        nerdInfo: null,
        beerStyle: null
    },

    layout: {
        type: 'card',
        animation: {
            type: 'flip',
        }
    },

    activeItem: 1,

    items: [
        {
            xtype: 'biotile',
        },
        {
            xtype: 'infotile'
        },
    ],

    updateNerdInfo: function (value) {
        this.down('infotile').updateNerdInfo(value);
    },

    updateText: function (value) {
        this.down('infotile').updateText(value);
    },

    updateBanner: function (value) {
        this.down('biotile').updateBanner(value);
    },

    updateDescription: function (value) {
        this.down('biotile').updateDescription(value);
        this.down('infotile').updateHeader(value);
    },

    updateImage: function (value) {
        this.down('biotile').updateImage(value);
        this.down('infotile').updateImage(value);
    },

    updateFooter: function (footer) {
        this.down('biotile').updateFooter(footer);
    },

    updateBeerStyle: function (style) {
        this.down('infotile').updateBeerStyle(style);
        this.down('biotile').updateBeerStyle(style);
    },

});
