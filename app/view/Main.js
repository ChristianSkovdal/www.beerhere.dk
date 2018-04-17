Ext.define('Beerhere.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',

    requires: [
        'Ext.MessageBox',
        'Beerhere.view.MainController',
        'Beerhere.view.ToolbarButton',
        'Beerhere.view.Beers',
        'Beerhere.view.PageContainer',
        'Shared.HtmlContainer',
        'Beerhere.view.MainModel',
        'Ext.plugin.Responsive',
        'Beer.model.Beer',
        'Tapsigns.TapsignsMain'
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

            height: 200,
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    cls: 'button-panel',

                    defaults: {
                        xtype: 'toolbarbutton',
                        //flex:1
                    },

                    items: [
                        {
                            cls: 'navi-button logo',
                            href: '#'
                        },
                        {

                            cls: 'navi-button contact',
                            html: 'Contact',
                            href: 'page/contact'

                        },

                        {
                            cls: 'navi-button beers',
                            html: 'Beers',
                            href: 'beer'
                        },

                        {
                            cls: 'navi-button events',
                            html: 'Events',
                            href: 'page/events'
                        },
                        '->',
                        {
                            xtype: 'component',
                            //cls: 'navi-button facebook',
                            html: '<a  href="https://www.facebook.com/beerhere4you"><img class="facebook" src="/img/facebook.png" /></a>',
                            flex: 1,
                            width: 100
                        }

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
            // layout: {
            //     type: 'card',
            //     animation: {
            //         type: 'slide',
            //         direction: 'left'
            //     }
            // },
            layout: 'card',
            reference: 'pagewrapper',
            cls: 'pagewrapper',
            flex: 1,
            //scrollable: true,

            items: [
                {
                    xtype: 'pagecontainer',
                    page: 'home',
                    //userCls: 'home-page-background'

                },
                {
                    xtype: 'pagecontainer',
                    page: 'contact',
                    userCls: 'contact-page-background'
                },
                {
                    xtype: 'pagecontainer',
                    page: 'events'
                },
                {
                    xtype: 'beers',
                    reference: 'beerPage'
                },
                {
                    xtype: 'tapsigns',
                    reference: 'tapsigns',
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
