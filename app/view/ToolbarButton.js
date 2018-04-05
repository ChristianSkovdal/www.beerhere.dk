Ext.define('Beerhere.view.ToolbarButton', {
    extend: 'Ext.Container',
    xtype: 'toolbarbutton',

    listeners: {
        initialize: (cmp) => {
            cmp.el.on('click', function () {
                this.fireEvent('click', cmp);
            }, cmp);
        }
    }
});
