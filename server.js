const express = require('express');
const inquirer = require('inquirer');

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

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
  /* get('/api/employees'); */

  //post call


  //run menu
  /* runMenu(); */
}

function doChoice(choice) {
  choice = choice.menuChoice;
  if (choice = 'Add Employee') {addEmployee()};
  /* if (choice = 'Add Role') {addRole()};
  if (choice = 'Add Department') {addDepartment()};
  if (choice = 'Update Employee Role') {updateEmployeeRole()};
  if (choice = 'View All Employees') {viewEmployees()};
  if (choice = 'View All Roles') {viewRoles()};
  if (choice = 'View All Departments') {viewDepartments()};
  if (choice = 'Quit') {quit()}; */
}

function start() {
  console.log(intro);
  var begin = inquirer.prompt(menu);
  begin.then((response) => {
    doChoice(response);
  });
};

start();