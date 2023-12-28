const http=require('http');

function dataControler(req,resp){
    resp.write("<b>This is Bilawal Mehmood</b>");
    resp.end();
  }

http.createServer(dataControler).listen(4500);
