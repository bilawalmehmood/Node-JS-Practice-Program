const express = require('express');
const mongodb= require('mongodb');
const dbConnect = require("./mongodb.js");
const app =express();
const port = 3000;
const baseUrl='/';

// Connect to MongoDB
// dbConnect();

// Middleware to parse JSON requests
app.use(express.json());

// GET endpoint to retrieve all users
app.get(baseUrl,async (req, res) => {
  const db = await dbConnect();
  const result=await db.find().toArray();
  res.json(result);  
});

// POST endpoint to insert a new user
app.post(baseUrl, async (req, res) => {
  const db = await dbConnect();
  const result= await db.insertOne(req.body);
  if(result.acknowledged){
    res.json(result);
  }
});

// PUT endpoint to update an existing user
app.put('/:id', async (req, res) => {
    const db = await dbConnect();
    const result= await db.updateOne({
        _id:new mongodb.ObjectId(req.params.id),
    },{
        $set: req.body,
    });
    if(result.acknowledged){
        res.json(result);
    }
});

// DELETE endpoint to delete an existing user
app.delete('/:id', async (req, res) => {
    const db = await dbConnect();
    const result= await db.deleteOne({
        _id:new mongodb.ObjectId(req.params.id),
    });
    if(result.acknowledged){
        res.json(result);
    }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
