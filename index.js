const inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'input',
        name: 'manager',
        message: 'What is the Team Managers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email address?',
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is the office number?',
    },
    {
        type: 'list',
        name: 'menu',
        message: 'Please choose',
        choices: ['Engineer', 'Intern', 'Finish building my team']
    },
])