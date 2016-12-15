var webSocket = require('ws');
var ws = new webSocket('ws://localhost:3000/qrcode');

ws.on('open',function open() {
  var hello = {op:'hello'};
  ws.send(JSON.stringify(hello));
});

ws.on('message',function(data,flags){
  var obj = JSON.parse(data);

  console.log("Received:" + JSON.stringify(obj));

  if(obj.op == 'hello'){
    console.log("### Got hello token " + obj.token);
  }
  else if (obj.op == 'authdone')
  {
    console.log("### Got auth token "+ obj.accessToken);
    ws.close();
  }
});
