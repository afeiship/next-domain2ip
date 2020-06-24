/*!
 * name: @feizheng/next-domain2ip
 * description: Query ip from domain.
 * homepage: https://github.com/afeiship/next-domain2ip
 * version: 1.0.1
 * date: 2020-06-24T07:45:47.547Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
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

//# sourceMappingURL=next-domain2ip.js.map
