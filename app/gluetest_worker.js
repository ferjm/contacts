importScripts('glue/protocol_helper.js');

dump('worker\n');

var protocol = new IPDLProtocol('example');
protocol.recvTest = function(resolve, reject, args) {
  dump && dump('Received test\n');
};
