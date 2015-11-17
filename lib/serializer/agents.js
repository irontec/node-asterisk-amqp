'use strict';

var forEach = require('lodash.foreach');
var S = require('string');

function serialize(data) {
    var agentsData = data.agentes;
    var agents = [];

    forEach(agentsData, serializeAgent);
    return agents;

    function serializeAgent(agentData) {
        var agent = {};

        forEach(agentData, function(data, property) {
            var propertyName = S(property).camelize().s;
            agent[propertyName] = data;
        });


        agents.push(agent);
    }
}

module.exports = serialize;
