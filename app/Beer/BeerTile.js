Ext.define('Beer.BeerTile', {
    extend: 'Ext.Container',
    xtype: 'beertile',

    requires: [
        'Ext.Img',
        'Beer.BeerTileController',
        'Beer.InfoTile',
        'Beer.NerdInfo',
        'Beer.PresentationTile',
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
        info: null,
        //description: null,
        //text: null,
        nerdInfo: null,
        beerStyle: null,
        beerData: null,
        //ingredients: null,
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
            xtype: 'presentation-tile',
        },
        {
            xtype: 'infotile'
        },

    ],

    updateNerdInfo: function (value) {
        this.down('infotile').updateNerdInfo(value);
    },

    // updateText: function (value) {
    //     this.down('infotile').updateText(value);
    // },

    // updateIngredients: function (value) {
    //     this.down('infotile').updateIngredients(value);
    // },

    updateBanner: function (value) {
        this.down('presentation-tile').updateBanner(value);
    },

    updateInfo: function (value) {
        this.down('presentation-tile').updateInfo(value);
        this.down('infotile').updateInfo(value);
    },

    updateImage: function (value) {
        this.down('presentation-tile').updateImage(value);
        this.down('infotile').updateImage(value);
    },

    updateFooter: function (footer) {
        this.down('presentation-tile').updateFooter(footer);
    },

    updateBeerStyle: function (style) {
        this.down('infotile').updateBeerStyle(style);
        this.down('presentation-tile').updateBeerStyle(style);
    },

});
