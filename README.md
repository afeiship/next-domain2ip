# next-domain2ip
> Query ip from domain.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-domain2ip
```

## usage
```js
import '@jswork/next-domain2ip';

nx.domain2ip('www.china.com').then(res=>{
  console.log(res);
});
// [ '13.114.40.48' ]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-domain2ip/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-domain2ip
[version-url]: https://npmjs.org/package/@jswork/next-domain2ip

[license-image]: https://img.shields.io/npm/l/@jswork/next-domain2ip
[license-url]: https://github.com/afeiship/next-domain2ip/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-domain2ip
[size-url]: https://github.com/afeiship/next-domain2ip/blob/master/dist/next-domain2ip.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-domain2ip
[download-url]: https://www.npmjs.com/package/@jswork/next-domain2ip
