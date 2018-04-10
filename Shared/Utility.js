Ext.define('Shared.Utility', {

  alternateClassName: ['Util'],

  statics: {

    loadConfig(cfg, url) {

      return new Promise(function (resolve, reject) {
        
        Util.get(url)
        .then(({response, text, obj}) => resolve(Ext.apply(cfg,obj)))
        .catch(({response,error}) => reject(error))
      });

    },

    get(url) {
      return new Promise(function (resolve, reject) {

        Ext.Ajax.request({
          url: url,

          success: function (response, opts) {
            var obj = Ext.decode(response.responseText);
            resolve({response: response, text: response.responseText, obj: obj});
          },

          failure: function (response, opts) {
            reject({response: response, error: 'server-side failure with status code ' + response.status});
          }
        });
      });
    }

  }

});