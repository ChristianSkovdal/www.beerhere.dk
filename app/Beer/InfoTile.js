Ext.define('Beer.InfoTile', {
    extend: 'Ext.Container',
    xtype: 'infotile',

    cls: 'infotile',
    width: '100%',
    height: '100%',

    layout: 'fit',

    config: {
        text: null,
        abv: null,
        og: null,
        ibu: null,
        style: null
    },

    referenceHolder: true,


    items: [
        {
            xtype: 'container',
            layout: 'vbox',
            width: '100%',
            height: '100%',

            items: [
                {
                    xtype: 'container',
                    reference: 'banner',
                    //userCls: 'info-banner-ipa',
                    width: '100%',
                    height: '100%',
                    height: 100,
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'component',    
                            reference: 'title',
                            height:'100%',
                            userCls: 'info-title',
                        },
                        {
                            xtype: 'button',
                            html: '<i style="font-size:18px" class="fa fa-arrow-circle-left"></i>',
                            handler: 'flip',
                            style:'color:white;background: red !important;',
                            height:50,
                            width: 80                        
                            //width: '90%',
                        }

                    ]
                },
                {
                    layout: 'vbox',
                    flex: 1,
                    reference: 'bottomContainer',
                    xtype: 'container',
                    scrollable: true,

                    items: [
                        {
                            xtype: 'component',
                            userCls: 'info-text',
                            flex: 1,
                            reference: 'text'
                        }
                    ]
                },
                {
                    xtype: 'nerdinfo'
                }
            ]
        },
        {
            xtype: 'image',
            reference: 'image',
            userCls: 'info-image',
            left: 50,
            top: 50,
        }
    ],

      
    updateBeerStyle: function (value) {
        this.lookup('banner').setUserCls('info-banner-' + value);
    },

    updateNerdInfo(value) {
        this.down('nerdinfo').setIbu(value.ibu);
        this.down('nerdinfo').setOg(value.og);
        this.down('nerdinfo').setAbv(value.abv);
    },

    updateHeader(value) {
        this.lookup('title').setHtml(value.split('<br>')[0]);
    },

    updateText: function (value) {
        var txt = this.lookup('text');
        txt.setHtml(value);
    },
    
    updateImage: function (value) {
        this.configureImage('image', value);
    },

    privates: {
        configureImage: function (ref, config) {
            var image = this.lookup(ref),
                obj = config;

            if (typeof config === 'string') {
                obj = {
                    src: config
                };
            }

            image.setConfig(obj);
        }
    }

});
