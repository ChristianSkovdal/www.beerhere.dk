Ext.define('Beerhere.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',

    requires: [
        'Ext.MessageBox',
        'Beerhere.view.MainController',
        'Beerhere.view.ToolbarButton',
        'Beerhere.view.BeerCntr',
        'Shared.HtmlContainer',
        'Beerhere.view.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: 'vbox',
    cls: 'mainui',

    items: [
        {
            xtype: 'htmlcntr',
            cls: 'navi-bar-wrapper',
            plugins: 'responsive',

            responsiveConfig: {
                'width < 668': {
                    height: 160,
                }
            },

            url: '/assets/html/siteinfo.html',
            //html: `<div class="site-info"></div>`,

            height: 200,
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    cls: 'button-panel',

                    defaults: {
                        xtype: 'toolbarbutton',
                    },

                    items: [
                        {
                            cls: 'navi-button logo',
                            itemId: 'logo'
                        },
                        {

                            cls: 'navi-button contact',
                            html: 'Contact',
                            itemId: 'contact'

                        },

                        {
                            cls: 'navi-button beers',
                            html: 'Beers',
                            itemId: 'beers'
                        },

                        {
                            cls: 'navi-button events',
                            html: 'Events',
                            itemId: 'events'
                        },

                    ]

                },
                {
                    xtype: 'container',
                    cls: 'navi-bar-bottom',
                    height: 96
                },
            ]
        },
        {
            xtype: 'container',
            layout: 'card',
            reference: 'pagewrapper',
            cls: 'pagewrapper',
            flex: 1,

            items: [
                {
                    xtype: 'container',
                    shadow: true,
                    cls: 'page',
                    reference: 'page',
                    scrollable: true,

                    items: [
                        {                            
                            xtype: 'htmlcntr',
                            reference: 'html',

                        }
                    ]

                },
                {
                    xtype: 'beercntr',
                    reference: 'beers'
                }
            ]

        },
        // {
        //     xtype: 'container',
        //     cls: 'bottom-bar',
        //     height: 60,
        // },


    ]
});
