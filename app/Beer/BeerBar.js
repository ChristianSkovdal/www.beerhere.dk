Ext.define('Beer.BeerBar', {
    extend: 'Ext.Toolbar',
    xtype: 'beerbar',
    border: false,

    config: {        
        beer: null,
        label: false,
        rb: null,    
        ba: null,    
        ut: null,
    },

    requires: [
        'Beer.BeerButton',
    ],

    layout: {
        pack: 'center'
    },

    defaults: {
        border: false,
        tapsign: false,
        label: false,
        margin: '2 3',
        width: 50,
        height: 50
    },

    referenceHolder: true,
    shadow: false,
    style: 'background-color:whitesmoke;',

    items: [

        {
            xtype: 'beerbutton',
            userCls: 'ratebeer',
            html: '100%',
            reference: 'rb'
        },
        {
            xtype: 'beerbutton',
            userCls: 'beeradvocate',
            html: '3,78/5',
            reference: 'ba'
        },
        {
            xtype: 'beerbutton',
            userCls: 'untappd',
            html: '3,7/5',
            reference: 'ut'
        },
        {
            xtype: 'beerbutton',
            html: 'Tap<br>sign',
            userCls: 'decals',
            handler: 'gotoDecalPrinting',
            reference: 'tapsigns'
        },
        {
            xtype: 'beerbutton',
            html: 'Fact<br>Sheet',
            userCls: 'facts',
            handler: 'downloadFactSheet',
            reference: 'factsheet'
        },
        {
            xtype: 'beerbutton',
            html: 'Label',
            userCls: 'label',
            handler: 'downloadLabel',
            reference: 'label'
        },
        {
            xtype: 'beerbutton',
            html: '<i style="font-size:18px" class="fa fa-info-circle"></i>',
            userCls: 'info',
            handler: 'flip'
        },
    ],

    
    updateLabel(value) {
        this.lookup('label').setHidden(value);
    },

    updateTapsign(value) {
        this.lookup('tapsign').setHidden(value);
    },

    updateBeer(value) {
        this.lookup('tapsigns').setHref('tapsigns/'+value);
        this.lookup('factsheet').setHref('factsheet/'+value);
        this.lookup('label').setHref('label/'+value);
    },

    updateRb(value) {
        this.updateSomething('rb', value);
    },

    updateBa(value) {
        this.updateSomething('ba', value);
    },

    updateUt(value) {
        this.updateSomething('ut', value);
    },

    updateSomething(site, value) {
        if (value.score && value.url) {
            this.lookup(site).setHtml(value.score);
            this.lookup(site).setHref(value.url);   
        }
        else {
            this.lookup(site).hide();
        }

    }
});
