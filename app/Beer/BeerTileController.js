Ext.define('Beer.BeerTileController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.beertile',

    onBeerButtonClick(btn) {
        var win = window.open(btn.getHref(), '_blank');
        win.focus();
    },

    gotoDecalPrinting(btn) {
        this.redirectTo(btn.getHref(), true);
    },

    downloadLabel(btn) {

        let tile = btn.up('beertile');
        let beer = tile.getBeerData();

        window.open(beer.label,'download')

    },

    downloadFactSheet(btn) {

        let tile = btn.up('beertile');
        let beer = tile.getBeerData();
        let renderPdf = (imgdata) => {

            var pdf = new jsPDF();

            pdf.setFontSize(40);
            pdf.text(15, 25, beer.name);
            pdf.setFontSize(20);
            pdf.text(15, 35, beer.tagline || '');
            pdf.addImage(imgdata[beer.img], 'JPEG', 15, 50, 80, 80);
            pdf.setFontSize(15);


            //let text = `${beer.description}\n\n\nMalts: ${beer.ingredients.malts}`;

            let lines = pdf
                .setFontSize(16)
                .splitTextToSize(beer.description || '', 100);
                debugger;

            let offset = 50;
            pdf.text(100, offset, lines);
            offset += lines.length * 16;
            lines = pdf
                    .setFontSize(12)
                    .splitTextToSize(`Malts: ${beer.ingredients.malts}\nHops: ${beer.ingredients.hops}\nOther ingredients: ${beer.ingredients.other}`, 100);

            pdf.text(100, offset, lines);

            // Beerhere general info
            //lines = pdf.splitTextToSize(beer.description || '', 100);
            //pdf.text(100, 50, lines);


            pdf.save(beer.name+'.pdf');
        };

        PdfUtil.loadImages([beer.img])
            .then(imageData => {
                renderPdf(imageData);
            })
            .catch(err => Ext.Msg.alert('Error', err));


    },

    onInfoClicked: function (btn) {
        this.getView().setActiveItem(1);
    },

    flip: function (btn) {
        let view = this.getView();
        let v = view.items.indexOf(view.getActiveItem());
        v = v == 0 ? 1 : 0;
        view.setActiveItem(v);
    },

});
