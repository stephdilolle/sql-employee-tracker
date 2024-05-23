const { Client } = require('pg');
const inquirer = require('inquirer');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'employee_db',
    password: 'sDi1995',
    port: 5432,
});

client.connect();

// Main menu options
const mainMenuOptions = [
    'View all departments',
    'View all roles',
    'View all employees',
    'Add a department',
    'Add a role',
    'Add an employee',
    'Update an employee role'
];

// Function to view all departments
async function viewAllDepartments() {
    const query = 'SELECT * FROM departments';
    const result = await client.query(query);
    console.table(result.rows);
}

// Function to view all roles
async function viewAllRoles() {
    const query = 'SELECT * FROM roles';
    const result = await client.query(query);
    console.table(result.rows);
}

// Function to view all employees
async function viewAllEmployees() {
    const query = 'SELECT * FROM employees';
    const result = await client.query(query);
    console.table(result.rows);
}

// Function to add a department
async function addDepartment() {
  const answers = await inquirer.prompt([
      {
          type: 'input',
          name: 'department_name',
          message: 'Enter the department name:'
      }
  ]);

  const query = 'INSERT INTO departments (department_name) VALUES ($1) RETURNING *';
  const values = [answers.department_name];

  console.log('Executing SQL query:', query);
  console.log('Query values:', values);

  try {
      const result = await client.query(query, values);
      console.log('Department added successfully!');
      console.log(result.rows[0]); // Optional: Print the added department details
  } catch (error) {
      console.error('Error adding department:', error);
  }
}

// Function to add an employee
async function addEmployee() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter the employee\'s first name:'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter the employee\'s last name:'
        },
        

    ]);

    const query = 'INSERT INTO employees (first_name, last_name) VALUES ($1, $2)';
    await client.query(query, [answers.first_name, answers.last_name]);
    console.log('Employee added successfully!');
}

// Main function to start the application
async function startApp() {
    const { choice } = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'Select an option:',
        choices: mainMenuOptions
    });

    switch (choice) {
        case 'View all departments':
            await viewAllDepartments();
            break;
        case 'View all roles':
            await viewAllRoles();
            break;
        case 'View all employees':
            await viewAllEmployees();
            break;
        case 'Add a department':
            await addDepartment();
            break;
        case 'Add an employee':
            await addEmployee();
            break;
        // Add cases for other options
        default:
            console.log('Invalid choice');
    }

    client.end(); // Close the database connection
}

startApp(); // Start the application