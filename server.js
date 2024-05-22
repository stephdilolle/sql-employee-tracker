const inquirer = require('inquirer');
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'employee_db',
  password: 'sDi1995',
  port: 5432,
});

client.connect();

const questions = [
  {
    type: 'input',
    name: 'departmentName',
    message: 'Enter department name:',
  },
  {
    type: 'input',
    name: 'roleTitle',
    message: 'Enter role title:',
  },
];

inquirer.prompt(questions)
  .then(answers => {
    const { departmentName, roleTitle } = answers;

    // Insert data into departments table
    client.query(`INSERT INTO departments (name) VALUES ($1)`, [departmentName]);

    // Insert data into roles table
    client.query(`INSERT INTO roles (title) VALUES ($1)`, [roleTitle]);

    // Add more queries to insert data into other tables

    console.log('Data inserted successfully.');

    client.end();
  })
  .catch(error => {
    console.error('Error:', error);
    client.end();
  });