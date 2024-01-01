const dbConnect = require("./mongodb.js");

const deleteData = async () => {    
    const db = await dbConnect();

    const result = await db.deleteOne({
        name: "Jawaid ALi",
    });
    console.log(result);
};

deleteData();