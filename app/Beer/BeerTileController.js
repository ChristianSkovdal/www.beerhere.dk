Ext.define('Beer.BeerTileController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.beertile',

    
    // listen: {
    //     component: {
    //         'beerbutton' : {
    //             click: 'onBeerButtonClick'
    //         }
    //     },
    // },

    onBeerButtonClick(btn) {
        var win = window.open(btn.getHref(), '_blank');
        win.focus();
    },

    gotoDecalPrinting() {
        this.redirectTo('tapsigns', true);

    },

    onInfoClicked: function (btn) {
        this.getView().setActiveItem(1);
    },

    flip: function (btn) {
        let view = this.getView();
        let v = view.items.indexOf(view.getActiveItem());
        v = v == 0 ? 1 : 0;
        view.setActiveItem(v);
    },

});
