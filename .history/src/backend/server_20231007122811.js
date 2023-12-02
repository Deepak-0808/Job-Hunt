const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: '', // Your MySQL password
  database: 'my_react_db', // Your MySQL database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

app.use(cors());

// Create API routes to interact with the database (e.g., CRUD operations).

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




