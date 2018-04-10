Ext.define('Beer.BeerTileController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.beertile',

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
