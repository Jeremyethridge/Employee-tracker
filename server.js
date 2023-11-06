const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Jdogging321!',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database`)
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  