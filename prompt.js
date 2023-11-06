const inquirer = require('inquirer');
const connection = require('./db');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What would you like to do?',
        },
        {
            type: 'input',
            message: 'What is the name of the department?',
        },
        {
            type: 'input',
            message: 'What would you like to do?',
        },
        {
            type: 'input',
            message: 'What is the name of the role?',
        },
        {
            type: 'input',
            message: 'What is the salary of the role?'
        },
        {
            type: 'input',
            message: 'Which department does the role belong to?',
        },
        {
            type: 'input',
            message: 'What would you like to do?',
        },
        {
            type: 'input',
            message: "What is the employee's first name?",
        },
        {
            type: 'input',
            message: "What is the employee's last name?",
        },
        {
            type: 'input',
            message: "What is the employee's role?",
        },
        {
            type: 'list',
            message: "Who is the employee's manager?",
        },
        {
            type: 'input',
            message: 'What would you like to do?',
        },
        {
            type: 'list',
            message: "Which employee's role do you want to update",
        },
    ])