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
                beer: b.id,
                label: b.label
            }, b.ratings);

            beerPage.add({
                nerdInfo: {
                    ibu: b.ibu,
                    og: b.og,
                    abv: b.abv,
                },
                info: {
                    name: b.name,
                    tagline: b.tagline,
                    description: b.description,
                    ingredients: b.ingredients
                },
                footer: footer,
                //description: `${b.name}<br>${b.tagline}`,
                image: b.img,
                banner: b.banner,
                label: b.label,
                //text: b.description,
                beerStyle: b.style,
                //ingredients: b.ingredients,
                beerData: b
            });
        });

        //beerpage.getController().load(records);

        // Add tap signs
        tapsigns.getController().load(records);

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
    },
});
