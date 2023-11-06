-- Inserting data into the department table
INSERT INTO department (name)
VALUES ("Accounting"), ("Information Technology"), ("Human Resources"), ("Sales"), ("Operations Management");

-- Inserting data into the role table
INSERT INTO role (title, salary, department_id)
VALUES ("Public Accountant", 75000.00, 1), ("Software Engineer", 150000.00, 2), ("HR Analytics Specialist", 200000.00, 3), ("Sales Representative", 55000.00, 4), ("Hiring Manager", 50000.00, 5);

-- Inserting data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
  ("Jeremy", "Ethridge", 1, NULL),
  ("Kaitlyn", "Davis", 2, NULL),
  ("Jacob", "Watkins", 3, NULL),
  ("Brandon", "Jackson", 4, NULL);