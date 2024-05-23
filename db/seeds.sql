INSERT INTO departments (department_name) VALUES 
('Sales'),
('Accounting'),
('HR');


INSERT INTO roles (title, salary, department_id) VALUES 
('Senior Sales Representative', 60000, 1), 
('Sales Representative', 50000, 1), 
('Accountant', 80000, 2), 
('Bookkeeper', 75000, 2), 
('HR Manager', 80000, 3), 
('Payroll Manager', 70000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES 
('Jim', 'Halpert', 1, NULL), 
('Dwight', 'Schrute', 2, 1), 
('Oscar', 'Martinez', 3, NULL), 
('Angela', 'Martin', 4, 3), 
('Toby', 'Flenderson', 5, NULL), 
('Kelly', 'Kapoor', 6, 5);

