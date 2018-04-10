Ext.define('Beerhere.view.BeersController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.beers',

    listen: {
        component: {
            'beers': {
                initialize: 'init'
            }
        },
    },

    init() {
        Util.get('/assets/beers.json')
            .then(({response, obj}) => {

                obj.forEach(b => {
                    this.addBeer(b);
                });

            })
            .catch(MainController.errHandler);
    },

    addBeer(b) {
        let id = b.name.replace(' ', '_');
        this.getView().add({
            banner: {
                style: 'backgroundColor: #468fd3'
            },
            nerdInfo: {
                ibu: b.ibu,
                og: b.og,
                abv: b.abv,
            },
            footer: {
                xtype: 'beerbar',
                beer: id,
                rb: {
                    score: b.rbScore,
                    url: b.rbLink
                },
                ba: {
                    score: b.baScore,
                    url: b.baLink
                },
                ut: {
                    score: b.utScore,
                    url: b.utLink
                },
                label: b.label
            },
            description: `${b.name}<br>${b.tagline}`,
            image: b.img,
            banner: b.banner,
            text: b.description,
            beerStyle: b.style
        });


    }


});
