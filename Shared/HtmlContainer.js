Ext.define('Shared.HtmlContainer', {
    extend: 'Ext.Container',
    xtype: 'htmlcntr',

    styleHtmlContent: true ,

    config: {
        url: false
    },

    updateUrl: function (url) {
        if (url) {
            this.setMasked({
                xtype: 'loadmask', message: 'Loading...'
            });
            Ext.Ajax.request({
                url: url,
                scope: this,
                success: function (response) {
                    this.setHtml(response.responseText);
                    this.setMasked(false);
                }
            });
        }
    },

    reload: function () {
        this.updateUrl(this.getUrl());
    },
    
});