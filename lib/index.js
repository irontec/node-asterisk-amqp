'use strict';

var create = require('lodash.create');
var amqp = require('amqp');
var events = require('events');
var debug = require('debug')('asterisk-amqp:info');
var serializer = require('./serializer')();

function AsteriskAMQP(options, secondOptions) {
    var connection, adapter;

    if (!options) {
        throw new Error('AsteriskAMQP::MissingParameter:options')
    }

    secondOptions = secondOptions || {};

    connection = amqp.createConnection(options, secondOptions);
    debug('Connecting via amqp to %s:%s', options.host, options.port);

    connection.on('ready', onConnectionReady);

    adapter = create(
        //Prototype
        events.EventEmitter.prototype,
        {
            constructor: events.EventEmitter,
            connection: connection
        }
    );

    return adapter;

    function onConnectionReady() {
        debug('Connected to %s:%s', options.host, options.port);
        // Use the default 'amq.topic' exchange
        connection.queue('', onQueue);
    }

    function onQueue(queue) {
        var exchange = 'ivozexchange';

        debug('Created queue %s', queue.name);

        queue.bind(exchange, '');

        debug('Bound queue %s to %s', queue.name, exchange);

        // Receive messages
        queue.subscribe(onQueueMessage);
    }

    function onQueueMessage(message) {
        var serializedData = serializer.serialize(message);
        adapter.emit('asterisk.queues', serializedData.queues);
        adapter.emit('asterisk.agents', serializedData.agents);
    }
}

module.exports = AsteriskAMQP;
