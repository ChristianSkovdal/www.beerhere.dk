Ext.define('Beer.model.Beer', {
    extend: 'Ext.data.Model',

    schema: {
        namespace: 'Beer.model',
        proxy: {
            type: 'ajax',
            url: '/assets/beers.json'
        }
    },

    fields: [
        { name: 'id', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'style', type: 'string' },
        { name: 'tagline', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'img', type: 'string' },
        { name: 'banner', type: 'string' },
        { name: 'tapsign', type: 'string' },
        { name: 'label', type: 'string' },
        { name: 'ibu', type: 'int' },
        { name: 'abv', type: 'int' },
        { name: 'og', type: 'int' },
        { name: 'available', type: 'boolean' },
        { name: 'ratings', type: 'auto' },
        //{ name: 'name', type: 'string', mapping:'Name' },
    ]

});