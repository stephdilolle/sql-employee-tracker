DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c employee_db;

CREATE TABLE departments (
    id INTEGER PRIMARY KEY,
    department_name VARCHAR(30)
);

CREATE TABLE roles (
    id INTEGER PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);