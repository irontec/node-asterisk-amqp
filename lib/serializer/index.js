'use strict';

var serializeQueues = require('./queues');
var serializeAgents = require('./agents');

function Serializer() {


    return {
        'serialize': serialize
    };

    function serialize(msg) {
        var data, serializedData;

        data = JSON.parse(msg.data.toString());

        serializedData = {
            'queues': serializeQueues(data),
            'agents': serializeAgents(data)
        };

        return serializedData;
    }

}

module.exports = Serializer;
