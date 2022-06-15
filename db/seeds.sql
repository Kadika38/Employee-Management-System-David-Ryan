INSERT INTO department (name)
VALUES  ("Management"),
        ("Web Development");

INSERT INTO role (title, salary, department_id)
VALUES  ("Manager", 120000, 1),
        ("Web Developer - Front End", 100000, 2),
        ("Web Developer - Back End", 100000, 2);

INSERT INTO employee (first_name, last_name, role, manager)
VALUES  ("Steve", "Hart", 1, NULL),
        ("Maki", "Sareva", 3, 1),
        ("Soma", "Hospen", 2, 1);