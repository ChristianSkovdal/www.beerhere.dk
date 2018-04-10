Ext.define('Beerhere.view.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    alternateClassName: ['MainController'],

    static: {

        errHandler(err) {
            debugger;
            Ext.Msg.alert('Error', err.error || err.message)
        },
    
    },

    listen: {
        controller : {
            '#' : {
                unmatchedroute : 'goHome'
            }
        },
        component: {
            'toolbarbutton' : {
                click: 'onButtonClick'
            }
        },
    },

    routes : {
        'beer' : 'gotoBeers',
        'page/:id' : 'gotoPage',
    },

    onButtonClick(btn) {
        this.redirectTo(btn.href, true);
    },

    goHome() {
        this.redirectTo('page/home', true);
    },

    gotoBeers(beer) {
        this.lookup('pagewrapper').setActiveItem(this.lookup('beerPage'));
    },

    gotoPage(id) {

        let page = this.getView().down('pagecontainer[page='+id+']');
        if (page) {
            this.lookup('pagewrapper').setActiveItem(page);
        }
        else {
            Ext.Msg.alert('Error', 'Cannot find page ' + id);
            goHome();
        }
        
        //this.lookup('pagewrapper').setActiveItem(this.lookup('page'));
        //this.lookup('html').setUrl('assets/html/' + id + '.html');
    },


});
