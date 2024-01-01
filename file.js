const fs= require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'crud');
const filePath = '${dirPath}/text.txt';

// // make directory
// fs.mkdir(dirPath,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Directory created successfully');
//     }
// });

// // remove directory
// fs.rmdir(dirPath,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Directory removed successfully');
//     }
// });

// // create file
// fs.writeFile(filePath,'Hello World',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File created successfully');
//     }
// });

// // read file
// fs.readFile(filePath,'utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });

// // rename file
// fs.rename(filePath,'txt2.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File renamed successfully');
//     }
// });

// // append file
// fs.appendFile(filePath,'Hello World',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File created successfully');
//     }
// });

// // delete file
// fs.unlink(filePath,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File deleted successfully');
//     }
// });

// // copy file
// fs.copyFile(filePath,'txt2.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File copied successfully');
//     }
// });

