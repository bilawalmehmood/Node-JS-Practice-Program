const dbConnect = require("./mongodb.js");

const insert = async () => {
  const db = await dbConnect();
  const result= await db.insertOne({
    name: "Jawaid ALi",
    Contect: "03412652298",
    gender: "male",
  });
  if(result.acknowledged){
    console.log(result);
  }
 
};

insert();
