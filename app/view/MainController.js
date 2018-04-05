Ext.define('Beerhere.view.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    listen: {
        component: {
            'main': {
                initialize: 'logoClick'
            },
            '#logo': {
                click: 'logoClick'
            },
            '#contact': {
                click: 'htmlClick'
            },
            '#events': {
                click: 'htmlClick'
            },
            '#beers': {
                click: 'beersClick'
            }
        },
    },

    logoClick() {
        this.lookup('pagewrapper').setActiveItem(this.lookup('page'));
        this.lookup('html').setUrl('assets/html/home.html');
    },

    beersClick() {
        this.lookup('pagewrapper').setActiveItem(this.lookup('beers'));
    },

    htmlClick(btn) {
        this.lookup('pagewrapper').setActiveItem(this.lookup('page'));
        this.lookup('html').setUrl('assets/html/' + btn.getItemId() + '.html');
    },


});
