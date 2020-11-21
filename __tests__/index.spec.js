(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.domain2ip should return an arrany<ip:string>', function (done) {
      nx.domain2ip('www.github.com').then((res) => {
        // is an array
        expect(Array.isArray(res)).toBe(true);
        // to be ip
        expect(res[0].includes('.')).toBe(true);
        done();
      });
    });
  });
})();
