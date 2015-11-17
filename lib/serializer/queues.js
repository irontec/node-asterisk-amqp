'use strict';

var forEach = require('lodash.foreach');
var S = require('string');

function serialize(data) {
    var queuesData = data.colas;
    var queues = [];

    forEach(queuesData, serializeQueue);

    return queues;

    function serializeQueue(queueData, queueName) {
        var queue = {},
            members = [];


        forEach(queueData.Members, serializeMember);

        forEach(queueData, function(data, property) {
            var propertyName = S(property).dasherize().chompLeft('-').camelize().s;
            queue[propertyName] = data;
        });

        queue.name = queueName;
        queue.members = members;
        queues.push(queue);


        function serializeMember(memberData, memberName) {
            var member = {};

            forEach(memberData, function(data, property) {
                var propertyName = S(property).dasherize().chompLeft('-').camelize().s;
                member[propertyName] = data;
            });
            member.extension = S(member.location).between('/', '@').s;
            member.name = memberName;

            members.push(member);
        }
    }
}

module.exports = serialize;
