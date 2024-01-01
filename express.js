const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Simulated user data (replace with actual database connection)
let users = [
  { id: 1, name: 'Bilawal Mehmood', email: 'codewithbilawal.com' },
  { id: 2, name: 'Asad', email: 'asad.com' },
];

// Middleware to parse JSON requests
app.use(bodyParser.json());

// GET endpoint to retrieve all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});