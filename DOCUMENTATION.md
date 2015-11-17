# node-asterisk-amqp API docs

## API Reference

### ( config, [logger] ) ⇒ AsteriskAMQPConnector

Factory function, returns an AsteriskAMQPConnector instance

| Param           | Type     | Description                                  |
| -----           | ----     | -----------                                  |
| config          | `Object` | Configuration Object                         |
| config.host     | `string` | Connection host                              |
| config.port     | `number` | Connection port                              |
| config.login    | `string` | Authentication username                      |
| config.password | `string` | Authentication password                      |
| [logger]        | `Object` | Object to use as logger, defaults to console |

Example

```js
var asteriskAMQPConnector = require('node-asterisk-amqp')({
    host: nconf.get('ASTERISK_AMQP_HOST'),
    port: nconf.get('ASTERISK_AMQP_PORT'),
    login: nconf.get('ASTERISK_AMQP_LOGIN'),
    password: nconf.get('ASTERISK_AMQP_PASSWORD')
}, logger);
```

### asteriskAMQPConnector.on(event, callback)

Listens to specified event

| Param         | Type       | Description                            |
| -----         | ----       | -----------                            |
| event         | `string`   | Event name                             |
| callback      | `function` | Function to execute when event happens |

Example

```js
asteriskAMQPConnector.on('asterisk.agents', agentsListener);
```


***

## Events

### 'asterisk.agents'

Event fired with asterisk agents


| Param             | Type      | Description                   |
| -----             | ----      | -----------                   |
| agents            | `array`   | Array of agents               |
| agents.extension  | `string`  | Agent extension               |

### asterisk.queues'

Event fired with asterisk queues

| Param             | Type      | Description                   |
| -----             | ----      | -----------                   |
| queues            | `array`   | Array of queues               |
| queues.name       | `string`  | Queue name                    |
