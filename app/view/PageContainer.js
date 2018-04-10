Ext.define('Beerhere.view.PageContainer', {
    extend: 'Ext.Container',
    xtype: 'pagecontainer',

    shadow: true,
    cls: 'page',
    scrollable: true,

    config: {
        page:null
    },

    items: [
        {
            xtype: 'htmlcntr',
        }
    ],

    updatePage(value) {
        this.down('htmlcntr').setUrl('assets/html/' + value + '.html');    
    }
});
