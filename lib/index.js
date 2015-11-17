'use strict';

var assign = require('lodash.assign');
var amqp = require('amqp');
var EventEmitter = require('events').EventEmitter;

var serializer = require('./serializer')();

//var actions = require('./actions');

function AsteriskAMQP(options, logProvider) {
    var log, emitter, connection;

    emitter = new EventEmitter();
    log = logProvider || console;

    connection = amqp.createConnection(options);
    log.info('AsteriskAMQP.info', 'Connecting via amqp to ' + options.host + ':' + options.port);

    connection.on('ready', onConnectionReady);

    var asteriskInfo = assign(
        {
            'connection': connection
        },
        {
            'on': emitter.on.bind(emitter)
        }
    );

    return asteriskInfo;

    function onConnectionReady() {
        log.info('AsteriskAMQP.info', 'Connected to ' + options.host + ':' + options.port);
        // Use the default 'amq.topic' exchange
        connection.queue('', onQueue);
    }

    function onQueue(queue) {
        var exchange = 'ivozexchange';

        log.info('AsteriskAMQP.info', 'Created queue ' + queue.name);

        queue.bind(exchange, '');
        log.info('AsteriskAMQP.info', 'Bound queue ' + queue.name + ' to ' + exchange);

        // Receive messages
        queue.subscribe(onQueueMessage);
    }

    function onQueueMessage(message) {
        var serializedData;
        log.info('AsteriskAMQP.info', 'Got message');

        serializedData = serializer.serialize(message);
        log.info('AsteriskAMQP.info', 'Serialized Data');


        emitter.emit('asterisk.queues', serializedData.queues);
        log.info('AsteriskAMQP.event', 'asterisk.queues');

        emitter.emit('asterisk.agents', serializedData.agents);
        log.info('AsteriskAMQP.event', 'asterisk.agents');
    }
}

module.exports = AsteriskAMQP;
