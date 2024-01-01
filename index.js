const http=require('http');
const data=require('./data.js');
const dbConnect=require('./mongodb.js');

// function dataControler(req,resp){
//     resp.writeHead(200,{'Content-Type':'application/json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
//   }

// http.createServer(dataControler).listen(4500);

console.log(dbConnect);