# Employee Database

## Description

- What was your motivation?

-- To create an employee database that lists all departments, roles, and employees at a company.

-- The user is able to view the initial table as well as add a department, role, or employee.

-- The user is also able to update an existing employee.

- What problem does it solve?

-- It allows a company to keep an organized database of departments, roles, and employees.

- What did you learn?

-- I learned how to use Inquirer to add user input to an existing database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
1. Run npm install inquirer@8.2.4 to run version 8.2.4 of Inquirer
2. Run npm install pg to install Postgres.

## Usage

Provide instructions and examples for use. Include screenshots as needed.
1. Open the db folder in the terminal and run psql -U postgres to initialize Postgres.
2. Run \i schema.sql to create the employee database.
3. Run \i seeds.sql to add initial data to the employee database tables.
4. Open server.js in a new terminal and run npm install inquirer@8.2.4
5. Run node server.js to initiate the prompt.
- Video walkthrough: (https://www.loom.com/share/b4ffa969effb4c688c858260d58739ce?sid=37d4ee4a-d786-4383-ba18-5c9bf5c3b2d8)

## License

MIT

## Tests

N/A