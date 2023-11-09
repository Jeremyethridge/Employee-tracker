const inquirer = require("inquirer");
const app = require("./index");


const prompt = async () => {
  try {
    const data = await inquirer.prompt({
      name: "app",
      message: "What would you like to do?",
      type: "list",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a department",
        "Add a role",
        "Add an employee",         
        "Update an employee role",
      ],
    });

    switch (data.app) {
      case "View All Departments":
        app.viewDepartments().then(prompt);
        break;
      case "View All Roles":
        app.viewRoles().then(prompt);
        break;
      case "View All Employees":
        app.viewEmployees().then(prompt);
        break;
      case "Add a department":
        app.addDepartment().then(prompt);
        break;
      case "Add a role":
        app.addRole().then(prompt);
        break;
      case "Add an employee":
        app.addEmployee().then(prompt);
        break;
      case "Update an employee role":
        app.updateRole().then(prompt);
        break;
    }
  } catch (err) {
    console.log(err);
  }
};

prompt();