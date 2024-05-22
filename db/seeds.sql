INSERT INTO departments (id, name) VALUES
(1, 'Sales'),
(2, 'Accounting'),
(3, 'HR');

INSERT INTO roles (id, title, salary, department_id) VALUES
(1, 'Senior Sales Representative', 60000, 1),
(2, 'Sales Representative', 50000, 1),
(3, 'Accountant', 80000, 2),
(4, 'Bookkeeper', 75000, 2),
(5, 'HR Manager', 80000, 3),
(6, 'Payroll Manager', 70000, 3);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'Jim', 'Halpert', 1, NULL),
(2, 'Dwight', 'Schrute', 2, 1),
(3, 'Oscar', 'Martinez', 3, NULL),
(4, 'Angela', 'Martin', 4, 3),
(5, 'Toby', 'Flenderson', 5, NULL),
(6, 'Kelly', 'Kapoor', 6, 5);