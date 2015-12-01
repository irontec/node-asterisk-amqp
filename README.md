# asterisk-amqp

Node.js wrapper around asterisk amqp connection layer

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm i --save asterisk-amqp
```

## Usage

```js
// create an instance from the factory
var asteriskAMQP = require('asterisk-amqp')({
    host: nconf.get('ASTERISK_AMQP_HOST'),
    port: nconf.get('ASTERISK_AMQP_PORT'),
    login: nconf.get('ASTERISK_AMQP_LOGIN'),
    password: nconf.get('ASTERISK_AMQP_PASSWORD')
});

// Listen to events
asteriskAMQP.on('asterisk.agents', function(agents) {
});
asteriskAMQP.on('asterisk.queues', function(queues) {
});
```

[Here](https://github.com/irontec/node-asterisk-amqp/blob/master/doc/DOCUMENTATION.md) you can read the full documentation

## Debugging

asterisk-amqp uses [debug](https://www.npmjs.com/package/debug) module for logs

In order to get logs from asterisk-amqp you have to add the values to the DEBUG env variable like in the example

| Key                   | Prints            |
| ---                   | ------            |
| 'asterisk-amqp:info'  | Connector info    |

```sh
DEBUG="asterisk-amqp:info" node myapp.js
```


## Tests

```sh
npm install
npm test
```

## Dependencies

-   [amqp](https://github.com/postwait/node-amqp): AMQP driver for node [![NPM version](https://badge.fury.io/js/amqp.svg)](http://badge.fury.io/js/amqp)
-   [lodash.assign](https://www.npmjs.com/package/lodash.assign): The modern build of lodash’s assign as a module. [![NPM version](https://badge.fury.io/js/lodash.assign.svg)](http://badge.fury.io/js/lodash.assign)
-   [lodash.foreach](https://www.npmjs.com/package/lodash.foreach): The modern build of lodash’s forEach as a module. [![NPM version](https://badge.fury.io/js/lodash.foreach.svg)](http://badge.fury.io/js/lodash.foreach)
-   [string](https://github.com/jprichardson/string.js): string contains methods that aren't included in the vanilla JavaScript string such as escaping html, decoding html entities, stripping tags, etc. [![Build Status](https://travis-ci.org/jprichardson/string.js.svg?branch=master)](https://travis-ci.org/jprichardson/string.js) [![NPM version](https://badge.fury.io/js/string.svg)](http://badge.fury.io/js/string)

## Dev Dependencies

-   [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript. [![Build Status](https://travis-ci.org/eslint/eslint.svg?branch=master)](https://travis-ci.org/eslint/eslint) [![NPM version](https://badge.fury.io/js/eslint.svg)](http://badge.fury.io/js/eslint)

## License

[EUPL v1.1](https://raw.githubusercontent.com/irontec/node-asterisk-amqp/master/LICENSE.txt)

```
Copyright 2015 Irontec SL

Licensed under the EUPL, Version 1.1 or - as soon they will be approved by the European
Commission - subsequent versions of the EUPL (the "Licence"); You may not use this work
except in compliance with the Licence.

You may obtain a copy of the Licence at:
http://ec.europa.eu/idabc/eupl.html

Unless required by applicable law or agreed to in writing, software distributed under 
the Licence is distributed on an "AS IS" basis, WITHOUT WARRANTIES OR CONDITIONS OF 
ANY KIND, either express or implied. See the Licence for the specific language 
governing permissions and limitations under the Licence.
```
