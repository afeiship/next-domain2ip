(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var dns = require('dns');

  nx.domain2ip = function (inDomain) {
    return new Promise(function (resolve, reject) {
      dns.resolve4(inDomain, function (err, addresses) {
        if (err) return reject(err);
        resolve(addresses);
      });
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.domain2ip;
  }
})();
