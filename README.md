# client-id

unique client ids using monotonic increasing numbers with no upper bound.

only unique for a single client during a single session, not across clients or sessions.

based on code from [`bigeasy/monotonic`](https://github.com/bigeasy/monotonic)

```shell
npm install --save client-id
```

## example

```js
const ClientId = require('client-id')

while (true) {
  const clientId = ClientId()
  process.stdout.write(clientId + ' ')
}

// 0 1 2 3 4 5 6 7 8 9 a b c d e f 10 11 12 13 14 15 16
// 17 18 19 1a 1b 1c 1d 1e 1f 20 ......................
// ... ffffffff 100000000 100000001 100000002 100000003
// ... 1fffffffffffff 20000000000000 20000000000001
```

## usage

### `ClientId = require('client-id')`

### `clientId = ClientId()`

`clientId` returned will be a string, so we are not bounded by [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

## license

The Apache License

Copyright &copy; 2017 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
