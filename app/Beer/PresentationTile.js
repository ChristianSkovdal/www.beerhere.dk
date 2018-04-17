Ext.define('Beer.PresentationTile', {
    extend: 'Ext.Container',
    xtype: 'presentation-tile',

    requires: [
        'Ext.Img'
    ],

    layout: 'fit',
    cls: 'bio-tile',

    config: {
        banner: null,
        footer: null,
        image: null,
        //description: null
        info: null
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
                    xtype: 'image',
                    reference: 'banner',
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    html: '&#160;',
                },
                {
                    layout: 'vbox',
                    flex: 1,
                    reference: 'bottomContainer',
                    xtype: 'container',

                    items: [
                        {
                            xtype: 'component',
                            userCls: 'bio-description',
                            flex: 1,
                            tpl: `{name}<br>{tagline}`,
                            reference: 'description'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'image',
            reference: 'image',
            userCls: 'bio-image',
            left: '50%',
            top: '50%',
        }
    ],

    updateBeerStyle: function (value) {
        this.lookup('banner').setUserCls('bio-coverimage presentation-banner-' + value);
    },

    updateBanner: function (value) {
        this.configureImage('banner', value);
    },

    updateInfo: function (value) {
        var description = this.lookup('description');
        description.setData(value);
    },

    updateImage: function (value) {
        this.configureImage('image', value);
    },

    updateFooter: function (footer) {

        var container = this.lookup('bottomContainer'),
            items = container.getItems(),
            was = (items.length > 1) ? items.getAt(1) : null,
            now;
        now = Ext.factory(footer, null, was);

        if (now !== was) {
            if (now) {
                container.add(now);
            }
        }
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
