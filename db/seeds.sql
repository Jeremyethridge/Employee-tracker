INSERT INTO department (name)
VALUES  ("Information Technology"), 
        ("Human Resources"), 
        ("Marketing"), 
        ("Sales"), 
        ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES  ("Software Engineer", 120000.00, 1), 
        ("HR Manager", 100000.00, 2), 
        ("Marketing Analyst", 70000.00, 3), 
        ("Sales Representative", 60000.00, 4), 
        ("Financial Analyst", 80000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Jeremy", "Ethridge", 1, NULL), 
        ("Mike", "Jordan", 5, NULL),
        ("Kaitlyn", "Marie", 3, NULL), 
        ("Becka", "Hill", 2, NULL), 
        ("Christian", "Richard", 4, NULL),
        ("Bill", "Davis", 1, 1), 
        ("Jacob", "Michael", 3, 3), 
        ("Ryker", "Thomas", 1, 1), 
        ("Leslie", "Jenkins", 5, 2), 
        ("Luna", "Moore", 4, 5);
