Ext.define('Shared.PdfUtil', {
    singleton: true,

    alternateClassName: 'PdfUtil',

    loadImages(urls) {

        let imageData = {};

        let count=urls.length;
        let check = function (resolve, urls) {
            if (count == Object.keys(imageData).length) {
                resolve(imageData);
            }
        }

        return new Promise((resolve, reject) => {
            while (urls.length > 0) {
                let u = urls.pop();
                PdfUtil.loadImage(u)
                    .then(data => {
                        imageData[u] = data;
                        check(resolve, urls);
                    })
                    .catch(err => {
                        imageData[u] = 'Error!';
                        check(resolve, urls);
                    })
            }

        });

    },

    loadImage(url) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                var reader = new FileReader();
                reader.onloadend = () => {
                    resolve(reader.result)
                }

                reader.onerror = err => reject(error)
                reader.readAsDataURL(xhr.response);
            };
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.send();

        });
    }
});
