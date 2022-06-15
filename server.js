const express = require('express');
const routes = require('./routes');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

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
    choices: ['Add Employee', 'Add Role', 'Add Department', 'Update Employee Role', 'View All Employees', 'View All Roles', 'View All Departments'],
  },
];

function addEmployee() {
  console.log("adding employee");
}

function doChoice(choice) {
  choice = choice.menuChoice;
  if (choice = 'Add Employee') {addEmployee()};
  /* if (choice = 'Add Role') {addRole()};
  if (choice = 'Add Department') {addDepartment()};
  if (choice = 'Update Employee Role') {updateEmployeeRole()};
  if (choice = 'View All Employees') {viewEmployees()};
  if (choice = 'View All Roles') {viewRoles()};
  if (choice = 'View All Departments') {viewDepartments()}; */
}

function start() {
  console.log(intro);
  var begin = inquirer.prompt(menu);
  begin.then((response) => {
    doChoice(response);
  });
};

start();