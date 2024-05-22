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
        // Add cases for other options
        default:
            console.log('Invalid choice');
    }

    client.end(); // Close the database connection
}

startApp(); // Start the application