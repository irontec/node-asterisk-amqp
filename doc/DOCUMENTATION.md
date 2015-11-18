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

#### Example

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

#### Example

```js
asteriskAMQPConnector.on('asterisk.agents', agentsListener);
```


***

## Events

### 'asterisk.agents'

Event fired with asterisk agents


| Param                     | Type      | Description                   |
| -----                     | ----      | -----------                   |
| agents                    | `array`   | Array of agents               |
| agents.agent              | `string`  | Agent extension               |
| agents.idAgentsInterface  | `string`  | Agent interface id            |
| agents.interface          | `string`  | Agent interface name          |
| agents.logintime          | `string`  | Agent login time              |
| agents.pausetime          | `string`  | Agent pause time              |
| agents.paused             | `string`  | Agent is paused               |
| agents.idPausa            | `string`  | Agent id pausa                |
| agents.invalid            | `string`  | Agent is invalid              |
| agents.invalidtime        | `string`  | Agent invalid time            |
| agents.fullcontact        | `string`  | Agent full contact            |
| agents.textoterminal      | `string`  | Agent terminal text           |

#### Example

```js
[
  {
    idAgentsInterface: '92',
    agent: '223',
    interface: 'SIP/CBT1330012E',
    logintime: '2015-11-10 18:03:57',
    pausetime: null,
    paused: 'no',
    idPausa: null,
    invalid: 'no',
    invalidtime: null,
    fullcontact: 'sip:CBT1330012E@10.10.1.245:5060',
    textoterminal: '223 - Aitor'
  }
]

```


### asterisk.queues'

Event fired with asterisk queues

| Param                          | Type     | Description                          |
| -----                          | ----     | -----------                          |
| queues                         | `array`  | Array of queues                      |
| queues.name                    | `string` | Asterisk queue name/identifier       |
| queues.max                     | `string` | Asterisk queue max                   |
| queues.strategy                | `string` | Asterisk queue strategy              |
| queues.calls                   | `string` | Asterisk queue calls                 |
| queues.holdtime                | `string` | Asterisk queue hold time             |
| queues.talkTime                | `string` | Asterisk queue talk time             |
| queues.completed               | `string` | Asterisk queue completed             |
| queues.abandoned               | `string` | Asterisk queue abandoned             |
| queues.serviceLevel            | `string` | Asterisk queue service level         |
| queues.servicelevelPerf        | `string` | Asterisk queue service level perf    |
| queues.weight                  | `string` | Asterisk queue weight                |
| queues.members                 | `array`  | Asterisk queue members               |
| queues.members.location        | `string` | Member location                      |
| queues.members.stateInterface  | `string` | Member state interface               |
| queues.members.membership      | `string` | Member membership type               |
| queues.members.penalty         | `string` | Member priority                      |
| queues.members.callsTaken      | `string` | Number of calls taken                |
| queues.members.lastCall        | `string` | Last call identifier, defaults to 0  |
| queues.members.status          | `string` | Member status                        |
| queues.members.paused          | `string` | Member is paused                     |
| queues.members.extension       | `string` | Member extension                     |
| queues.members.name            | `string` | Member name                          |

#### Members status

| Key | Value     |
| --- | ---       |
| 1   | 'IDLE'    |
| 2   | 'INUSE'   |
| 6   | 'RINGING' |
| x   | 'UNKNOWN' |

#### Example

```js
[
  {
    max: '0',
    strategy: 'ringall',
    calls: '0',
    holdtime: '3',
    talkTime: '43',
    completed: '43',
    abandoned: '2',
    serviceLevel: '0',
    servicelevelPerf: '0.0',
    weight: '0',
    members: [
      {
        location: 'Local/223@agentes',
        stateInterface: 'SIP/CBT1330012E',
        membership: 'dynamic',
        penalty: '5',
        callsTaken: '1',
        lastCall: '1447832899',
        status: '1',
        paused: '0',
        extension: '223',
        name: 'Aitor'
      }
    ],
    name: 'recepcion'
  }
]
```
