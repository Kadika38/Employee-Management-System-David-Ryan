const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const { response } = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'DarmanIsKadikasDad1138()',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

// Default response for unknown requests
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {});

//actual app runthrough

const intro = ".--------------.\n|              |\n|   EMPLOYEE   |\n|   MANAGER    |\n|              |\n'--------------'";

const menu = [
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'menuChoice',
    choices: ['Add Employee', 'Add Role', 'Add Department', 'Update Employee Role', 'View All Employees', 'View All Roles', 'View All Departments', 'Quit'],
  },
];

function runMenu() {
  var runMenu = inquirer.prompt(menu);
  runMenu.then((response) => {
    doChoice(response);
  });
};

function addEmployee() {
  //retrieve roles and departments and managers


  //run inquirer prompt
  const employeeQs = [
    {
      type: 'input',
      message: 'Please enter employees first name',
      name: 'firstName',
    },
    {
      type: 'input',
      message: 'Please enter employees last name',
      name: 'lastName',
    }
  ];


  //run menu
  /* runMenu(); */
}

function addRole() {

}

function addDepartment() {
  const deptPrompt = [
    {
      type: 'input',
      message: 'Enter the name of the new department',
      name: 'deptName'
    }
  ];
  var createDept = inquirer.prompt(deptPrompt);
  createDept.then((response) => {
    db.query(`INSERT INTO department (name) VALUES ('${response.deptName}');`, function (err, results) {
      console.log(`Added ${response.deptName} to the database`);
      runMenu();
    })
  })
}

function viewEmployees() {
  //retrieve employees
  db.query('SELECT * FROM employee', (err, results) => {
    console.table(results);
    runMenu();
  });
}

function viewDepartments() {
  //retrieve depts
  db.query('SELECT * FROM department', (err, results) => {
    console.table(results);
    runMenu();
  });
}

function viewRoles() {
  //retrieve roles
  db.query('SELECT * FROM role', (err, results) => {
    console.table(results);
    runMenu();
  });
}

function doChoice(choice) {
  choice = choice.menuChoice;
  if (choice == 'Add Employee') {addEmployee()};
  if (choice == 'Add Role') {addRole()};
  if (choice == 'Add Department') {addDepartment()};
  if (choice == 'Update Employee Role') {updateEmployeeRole()};
  if (choice == 'View All Employees') {viewEmployees()};
  if (choice == 'View All Roles') {viewRoles()};
  if (choice == 'View All Departments') {viewDepartments()};
  if (choice == 'Quit') {return};
}

function start() {
  console.log(intro);
  var begin = inquirer.prompt(menu);
  begin.then((response) => {
    doChoice(response);
  });
};

start();