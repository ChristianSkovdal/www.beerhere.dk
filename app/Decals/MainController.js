Ext.define('Decals.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.decals',

    printDecals() {

        var getImageFromUrl = function (url, callback) {
            var img = new Image();
            img.onError = function () {
                alert('Cannot load image: "' + url + '"');
            };
            img.onload = function () {
                callback(img);
            };
            img.src = url;
        }

        var doc = new jsPDF();

        let vm = this.getViewModel();
        let size = vm.get('decalsize');
        let decals = Ext.ComponentQuery.query('img', this.lookup('doc'));
        let x = 0, y = 0;
        let max = 210;
        debugger;
        for (const d of decals) {

            x += size;
            if (x > max) {
                x = 0;
                y += size;
            }

            getImageFromUrl('/images/thumbs/fat-cat.png', imgData => {
                doc.addImage(imgData, 'JPEG', x, y, size, size);
            });

        }




        doc.save('beerhere-decals.pdf');

    },

    onThumbsPainted(cmp) {
        let imgs = ['fat-cat', 'hopfix', 'executioner', 'kama-citra'];
        let thumbs = this.lookup('thumbs');
        for (const i of imgs) {
            thumbs.add({
                xtype: 'button',
                icon: `/images/thumbs/${i}.png`,
                margin: 5,
                width: 140,
                height: 140,
                iconCls: 'thumbicon',
                handler: 'addDecal'
            })
        }
    },

    addDecal(btn) {
        let doc = this.lookup('doc');
        doc.add({
            xtype: 'img',
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

    }

});
