Ext.define('Beer.NerdInfo', {
    extend: 'Ext.Toolbar',
    xtype: 'nerdinfo',
    border: false,

    config: {
        //format: '0,000.0',

        ibu: null,

        og: null,

        abv: null
    },

    referenceHolder: true, // all logic is our updaters, we'll hold the refs (no controller)

    items: [{
        xtype: 'component',
        flex: 1,
        reference: 'ibu',
        userCls: 'social-status-category',
        html: '<div class="social-status-header">IBU</div>' +
              '<div class="social-status-count">3</div>'
    }, 
    {
        xtype: 'component',
        flex: 1,
        reference: 'og',
        userCls: 'social-status-category',
        html: '<div class="social-status-header">OG</div>' +
              '<div class="social-status-count">1</div>'
    }, 
    {
        xtype: 'component',
        flex: 1,
        reference: 'abv',
        userCls: 'social-status-category',
        html: '<div class="social-status-header">ABV</div>' +
              '<div class="social-status-count">1</div>'
    }],

    updateIbu: function (value) {
        this.setCount('ibu', value);
    },

    updateOg: function (value) {
        this.setCount('og', value);
    },

    updateAbv: function (value) {
        this.setCount('abv', value);
    },

    privates: {
        setCount: function (name, value) {
            var component = this.lookup(name),
                el = component.element.down('.social-status-count');
                //format = this.getFormat();

            el.dom.textContent = value;//Ext.util.Format.number(value, format);
        }
    }
});
