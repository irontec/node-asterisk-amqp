'use strict';

var create = require('lodash.create');
var assign = require('lodash.assign');
var amqp = require('amqp');
var events = require('events');
var debug = require('debug')('asterisk-amqp:info');

var serializer = require('./serializer')();

//var actions = require('./actions');

function AsteriskAMQP(options) {
    var connection, adapter;

    connection = amqp.createConnection(options);
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
        var serializedData;

        debug('Got message');

        serializedData = serializer.serialize(message);

        debug('Serialized data');

        adapter.emit('asterisk.queues', serializedData.queues);
        debug('event: %s', 'asterisk.queues');

        adapter.emit('asterisk.agents', serializedData.agents);
        debug('event: %s', 'asterisk.agents');
    }
}

module.exports = AsteriskAMQP;
