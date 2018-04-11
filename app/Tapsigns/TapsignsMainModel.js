Ext.define('Tapsigns.TapsignsMainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.tapsigns',

    data: {
        decalsize: 80
    },

    formulas: {
        decalMm: function(get) {
            return get('decalsize')*2;
        }
    }

});
