# node-asterisk-amqp

NodeJS wrapper around asterisk amqp connection layer

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

With git ssh access to git.irontec.com properly [configured](http://doc.gitlab.com/ce/ssh/README.html), install the library on your project

```sh
npm i --save git+ssh://git@git.irontec.com:internet/node-asterisk-amqp.git
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

ISC
