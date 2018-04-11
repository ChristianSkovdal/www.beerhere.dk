Ext.define('Beerhere.view.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    alternateClassName: ['MainController'],

    static: {

        errHandler(err) {
            Ext.Msg.alert('Error', err.error || err.message)
        },

    },

    listen: {
        controller: {
            '#': {
                unmatchedroute: 'goHome'
            }
        },
        component: {
            'toolbarbutton': {
                click: 'onButtonClick'
            },
            // 'beers': {
            //     initialize: 'initBeers'
            // }
        },
    },

    routes: {
        'beer': 'gotoBeers',
        'tapsigns': 'gotoTapsigns',
        'tapsigns/:id': 'gotoTapsigns',
        'page/:id': 'gotoPage',
    },

    onBeerStoreLoad(store, records, successful, operation, eOpts ) {

        let beerPage = this.lookup('beerPage');
        let tapsigns = this.lookup('tapsigns');

        // Add beers
        records.forEach(beer => {

            let b = beer.getData();

            let footer = Ext.apply({
                xtype: 'beerbar',
                beer: b.id
            }, b.ratings);

            beerPage.add({
                nerdInfo: {
                    ibu: b.ibu,
                    og: b.og,
                    abv: b.abv,
                },
                footer: footer,
                description: `${b.name}<br>${b.tagline}`,
                image: b.img,
                banner: b.banner,
                label: b.label,
                text: b.description,
                beerStyle: b.style
            });
        });

        // Add tap signs
        tapsigns.getController().load(records);

    },

//     initBeers(cmp) {
//         let store = this.getViewModel().getStore('beers');
// debugger;
//         store.load({
//             scope: this,
//             callback: function (records, operation, success) {
// debugger;
//                 records.forEach(beer => {

//                     let b = beer.getData();

//                     let footer = Ext.apply({
//                         xtype: 'beerbar',
//                         beer: b.id
//                     }, b.ratings);

//                     cmp.add({
//                         nerdInfo: {
//                             ibu: b.ibu,
//                             og: b.og,
//                             abv: b.abv,
//                         },
//                         footer: footer,
//                         description: `${b.name}<br>${b.tagline}`,
//                         image: b.img,
//                         banner: b.banner,
//                         label: b.label,
//                         text: b.description,
//                         beerStyle: b.style
//                     });

//                 });
//             }
//         });
//     },

    onButtonClick(btn) {
        this.redirectTo(btn.href, true);
    },

    goHome() {
        this.redirectTo('page/home', true);
    },

    gotoBeers(beer) {
        this.lookup('pagewrapper').setActiveItem(this.lookup('beerPage'));
    },

    gotoTapsigns(id) {
        let ts = this.lookup('tapsigns');
        ts.setTapSign(id);
        this.lookup('pagewrapper').setActiveItem(ts);
    },

    gotoPage(id) {

        let page = this.getView().down('pagecontainer[page=' + id + ']');
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
