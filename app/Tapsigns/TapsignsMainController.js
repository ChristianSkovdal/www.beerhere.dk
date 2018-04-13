Ext.define('Tapsigns.TapsignsMainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tapsigns',

    load(records) {
        
        let thumbs = this.lookup('thumbs');
        records.forEach(beer => {

            let b = beer.getData();

            if (b.tapsign) {
                let button = thumbs.add({
                    xtype: 'button',
                    icon: b.tapsign,
                    margin: 5,
                    iconCls: 'thumbicon',
                    handler: 'addDecal',
                    data: b
                });

                if (b.id == this.getView().getTapSign()) {
                    this.addDecal(button);
                }
            }
        });

    },

    addDecal(btn) {
        let doc = this.lookup('doc');
        doc.add({
            xtype: 'img',
            cls: 'doc-img',
            src: btn.getIcon(),
            margin: 0,
            bind: {
                width: '{decalMm}',
                height: '{decalMm}',
            },
            listeners: {
                painted: function (c) {
                    c.el.on('click', function (e) {
                        c.destroy();
                    }, c);
                }
            },
        });
    },

    resetDecals() {

        let doc = this.lookup('doc');
        doc.removeAll();

    },

    printDecals() {
        let me = this;
        let doc = this.lookup('doc');

        if (doc.getItems().items.length==0) {
            Ext.Msg.alert('Tapsigns', 'Please add at least one tapsign to print');
            return;
        }

        let renderPdf = (imgdata) => {

            var pdf = new jsPDF();

            let vm = this.getViewModel();
            let ds = vm.get('decalsize');
            let size = Ext.isArray(ds) ? ds[0] : ds;
            let decals = Ext.ComponentQuery.query('img', doc);
            const margin = 10;
            const max = 210;
            let x = margin, y = margin;

            
            for (const d of decals) {
                
                if ((x+size) > max) {
                    x = margin;
                    y += size;
                }

                pdf.addImage(imgdata[d.getSrc()], 'JPEG', x, y, size, size);
                
                x += size;
            }

            //doc.autoPrint()
            pdf.save('tapsigns.pdf');
        };

        let selected = doc.getItems().items.map(r => r.getSrc());
        let images = selected.filter((item, i, ar) => ar.indexOf(item) === i);

        PdfUtil.loadImages(images)
            .then(imageData => {
                renderPdf(imageData);
            })
            .catch(err => Ext.Msg.alert('Error', err));
    },

});
