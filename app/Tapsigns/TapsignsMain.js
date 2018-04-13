Ext.define('Tapsigns.TapsignsMain', {
    extend: 'Ext.Container',
    xtype: 'tapsigns',

    controller: 'tapsigns',
    viewModel: 'tapsigns',

    requires: [
        'Tapsigns.TapsignsMainModel',
        'Tapsigns.TapsignsMainController',
        'Shared.PdfUtil'
    ],

    config: {
        tapSign: null
    },

    layout: 'fit',

    applyTapSign(id) {
        // if (id) {
        //     debugger;
        //     let store = Ext.data.StoreManager.lookup('beers');
        //     if (store) {
        //         let rec = store.getById(id);
        //         if (rec) {
        //             this.getController().resetDecals();
        //             this.getController().add(rec.get('label'));        
        //         }
        //     }
            
        // }
    },

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            userCls: 'tapsigns-toolbar',
            defaults: {
                margin: '0 10 0 10',
            },
            items:
                [
                    {
                        text: 'Print',
                        handler: 'printDecals'
                    },
                    {
                        text: 'Reset',
                        handler: 'resetDecals'
                    },
                    {
                        label: 'Size',
                        xtype: 'sliderfield',
                        //flex: 1,
                        width: 300,
                        maxValue: 200,
                        minValue: 40,
                        userCls: 'tapsign-slider',
                        label: 'Size',
                        labelTextAlign: 'right',
                        labelAlign: 'left',
                        labelWidth: '50px',
                        labelCls: 'tapsign-width-label',
                        bind: {
                            value: '{decalsize}',
                        }
                    },
                    {
                        xtype: 'spinnerfield',
                        bind: {
                            value: '{decalsize}'
                        },
                        labelAlign: 'right',
                        label: ' mm',
                        maxValue: 200,
                        minValue: 40,
                        width: 120,
                        stepValue: 1,
                        cycle: true
                    }
                ]
        },
        {
            xtype: 'container',
            layout: 'hbox',
            style: 'background:transparent;',

            items: [

                {
                    ctype: 'container',
                    flex: 1,
                    reference: 'docwrapper',
                    layout: 'card',
                    items: [
                        {
                            xtype: 'container',
                            scrollable: 'y',
                            items: [
                                {
                                    xtype: 'container',
                                    cls: 'doc',
                                    reference: 'doc',
                                    itemId: 'doc',
                                    layout: 'float',
                                    shadow: true,
                                    margin: 20,
                                    width: 420,
                                    height: 594,
                                    padding: 10,
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            margin: 10,
                            reference: 'pdfcntr'
                        }
                    ]
                },
                {
                    flex: 1,
                    margin: 10,
                    xtype: 'container',
                    layout: 'float',
                    reference: 'thumbs',
                    itemId: 'thumbs'
                }
            ]
        }
    ]
});
