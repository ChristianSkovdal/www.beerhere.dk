Ext.define('Tapsigns.TapsignsMainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tapsigns',


    listen: {
        component: {
            '#thumbs': {
                //initialize: 'onThumbsPainted'
            },
            '#doc': {
                //painted: 'onDocPainted'
            },
        },
    },

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


    printDecals() {
        let me = this;

        let doc = this.lookup('doc');
        let selected = doc.getItems().items.map(r => r.getSrc());

        //------

        //         let showPdf = (imageData) => {
        //             var docDefinition = {
        //                 content: selected.map(r => ({
        //                     image: r,
        //                     width: 80
        //                 }
        //                 )),

        //                 images: imageData
        //             };
        // debugger;
        //             let pdf = pdfMake.createPdf(docDefinition);

        //             pdf.getDataUrl((dataUrl) => {
        //                 let pdfcntr = me.lookup('pdfcntr');
        //                 let cntr = pdfcntr.el.getFirstChild().el;
        //                 const iframe = document.createElement('iframe');
        //                 iframe.src = dataUrl;
        //                 iframe.style = style = 'position: relative; height: 100%; width: 100%;';
        //                 iframe.scrolling = 'no';
        //                 iframe.frameborder = 0;
        //                 cntr.appendChild(iframe);
        //                 me.lookup('docwrapper').setActiveItem(pdfcntr);
        //             });

        //         };

        let showPdf = (imageData) => {

            var docDefinition = {
                content: [
                    {
                        image: '/img/beers/executioner.jpg',
                        width: 200
                    },
                    {
                        image: '/img/beers/ammestout.jpg',
                        width: 200
                    }, {
                        image: '/img/beers/ammestout.jpg',
                        width: 200
                    }, {
                        image: '/img/beers/ammestout.jpg',
                        width: 200
                    },
                    // {
                    //     image: 'b2.jpg',
                    //     width: 200
                    // },
                    // {
                    //     image: 'b52.jpg',
                    //     width: 200
                    // },
                ],
                images: imageData
            };

            let pdf = pdfMake.createPdf(docDefinition);

            pdf.getDataUrl((dataUrl) => {
                let pdfcntr = me.lookup('pdfcntr');
                let cntr = pdfcntr.el.getFirstChild().el;
                const iframe = document.createElement('iframe');
                iframe.src = dataUrl;
                iframe.style = style = 'position: relative; height: 100%; width: 100%;';
                iframe.scrolling = 'no';
                iframe.frameborder = 0;
                cntr.appendChild(iframe);
                me.lookup('docwrapper').setActiveItem(pdfcntr);
            });

        };

        let images = selected.filter((item, i, ar) => ar.indexOf(item) === i);

        PdfUtil.loadImages(images)
            .then(imageData => {
                showPdf(imageData);
            })
            .catch(err => Ext.Msg.alert('Error', err))

        // PdfUtil.loadImages(['b1.jpg', 'b2.jpg', 'b52.jpg'])
        // .then(imageData => {
        //     showPdf(imageData);
        // })
        // .catch(err => Ext.Msg.alert('Error', err))


        //------

        // let showPdf = (imageData) => {
        //     var docDefinition = {
        //         content: selected.map(r => ({ 
        //             image: r, 
        //             width: 80 }
        //         )),

        //         images: imageData
        //     };

        //     let pdf = pdfMake.createPdf(docDefinition);

        //     pdf.getDataUrl((dataUrl) => {
        //         let pdfcntr = me.lookup('pdfcntr');
        //         let cntr = pdfcntr.el.getFirstChild().el;
        //         const iframe = document.createElement('iframe');
        //         iframe.src = dataUrl;
        //         iframe.style = style = 'position: relative; height: 100%; width: 100%;';
        //         iframe.scrolling = 'no';
        //         iframe.frameborder = 0;
        //         cntr.appendChild(iframe);
        //         me.lookup('docwrapper').setActiveItem(pdfcntr);
        //     });

        // };

        // let images = selected.filter((item, i, ar) => ar.indexOf(item) === i);

        // PdfUtil.loadImages(images)
        //     .then(imageData => {

        //         showPdf(imageData);
        //     })
        //     .catch(err => Ext.Msg.alert('Error', err))

        //-----

        // var getImageFromUrl = function (url, callback) {
        //     var img = new Image();
        //     img.onError = function () {
        //         alert('Cannot load image: "' + url + '"');
        //     };
        //     img.onload = function () {
        //         callback(img);
        //     };
        //     img.src = url;
        // }

        // var doc = new jsPDF();

        // let vm = this.getViewModel();
        // let size = vm.get('decalsize');
        // let decals = Ext.ComponentQuery.query('img', this.lookup('doc'));
        // let x = 0, y = 0;
        // let max = 210;
        // debugger;
        // for (const d of decals) {

        //     x += size;
        //     if (x > max) {
        //         x = 0;
        //         y += size;
        //     }

        //     getImageFromUrl('/images/thumbs/fat-cat.png', imgData => {
        //         doc.addImage(imgData, 'JPEG', x, y, size, size);
        //     });
        // }

        // doc.save('beerhere-decals.pdf');
    },


});
