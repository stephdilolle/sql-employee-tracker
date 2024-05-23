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
      console.log(result.rows[0]);
  } catch (error) {
      console.error('Error adding department:', error);
  }
}

// Function to add a role
async function addRole() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the role title:'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary for this role:'
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'Enter the department ID for this role:'
    }
  ]);

  const query = 'INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *';
  const values = [answers.title, answers.salary, answers.department_id];

  console.log('Executing SQL query:', query);
  console.log('Query values:', values);

  try {
    const result = await client.query(query, values);
    console.log('Role added successfully!');
    console.log(result.rows[0]);
  } catch (error) {
    console.error('Error adding role:', error);
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
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter the role ID for this employee:'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Enter the manager ID for this employee:'
    }
  ]);

  const query = 'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [answers.first_name, answers.last_name, answers.role_id, answers.manager_id];

  console.log('Executing SQL query:', query);
  console.log('Query values:', values);

  try {
    const result = await client.query(query, values);
    console.log('Employee added successfully!');
    console.log(result.rows[0]);
  } catch (error) {
    console.error('Error adding employee:', error);
  }
}
// Update an employee
async function updateEmployee() {
  const answers = await inquirer.prompt([
      {
          type: 'input',
          name: 'employee_id',
          message: 'Enter the employee ID to update:'
      },
      {
          type: 'input',
          name: 'new_role_id',
          message: 'Enter the new role ID for the employee:'
      },
      {
          type: 'input',
          name: 'new_manager_id',
          message: 'Enter the new manager ID for the employee:'
      }
  ]);

  const query = 'UPDATE employees SET role_id = $1, manager_id = $2 WHERE id = $3 RETURNING *';
  const values = [answers.new_role_id, answers.new_manager_id, answers.employee_id];

  console.log('Executing SQL query:', query);
  console.log('Query values:', values);

  try {
      const result = await client.query(query, values);
      console.log('Employee updated successfully!');
      console.log(result.rows[0]);
  } catch (error) {
      console.error('Error updating employee:', error);
  }
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
        case 'Add a role':
            await addRole();
            break;
        case 'Add an employee':
            await addEmployee();
            break;
        case 'Update an employee role':
            await updateEmployee();
            break;
        default:
            console.log('Invalid choice');
    }

    client.end(); // Close the database connection
}

startApp(); // Start the application