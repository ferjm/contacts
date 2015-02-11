importScripts('glue/protocol_helper.js');

window.addEventListener('DOMContentLoaded', function() {
  var worker = new Worker('gluetest_worker.js');
  var protocol = new IPDLProtocol('example', worker);
  protocol.sendTest();
});
