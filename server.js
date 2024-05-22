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

// Prompt for adding a department
function addDepartmentPrompt() {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'departmentName',
          message: 'Enter the name of the department:'
      }
  ]);
}

// Prompt for adding a role
function addRolePrompt() {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'roleName',
          message: 'Enter the name of the role:'
      },
      {
          type: 'input',
          name: 'salary',
          message: 'Enter the salary for this role:'
      },
      {
          type: 'input',
          name: 'departmentId',
          message: 'Enter the department ID for this role:'
      }
  ]);
}

// Prompt for adding an employee
function addEmployeePrompt() {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'firstName',
          message: 'Enter the first name of the employee:'
      },
      {
          type: 'input',
          name: 'lastName',
          message: 'Enter the last name of the employee:'
      },
      {
          type: 'input',
          name: 'roleId',
          message: 'Enter the role ID for this employee:'
      },
      {
          type: 'input',
          name: 'managerId',
          message: 'Enter the manager ID for this employee:'
      }
  ]);
}

// Add a department
async function addDepartmentToDatabase(departmentName) {
  const query = `INSERT INTO departments (name) VALUES ('${departmentName}')`;
  await executeQuery(query);
}

// Add a role
async function addRoleToDatabase(roleName, salary, departmentId) {
  const query = `INSERT INTO roles (title, salary, department_id) VALUES ('${roleName}', ${salary}, ${departmentId})`;
  await executeQuery(query);
}

// Add an employee
async function addEmployeeToDatabase(firstName, lastName, roleId, managerId) {
  const query = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}', ${roleId}, ${managerId})`;
  await executeQuery(query);
}