const {MongoClient}= require('mongodb');
const url= 'mongodb://localhost:27017';
const client=new MongoClient(url);
const databseName='nodejs';
const collectionNmae='users';

async function dbConnect(){
    let result=await client.connect();
    let db= result.db(databseName);
    let collection=db.collection(collectionNmae);
return  collection;
}

const main=async ()=>{
    let response= await dbConnect();
    console.log("Database Connected Succesfully ");
    }
main();

module.exports=dbConnect;