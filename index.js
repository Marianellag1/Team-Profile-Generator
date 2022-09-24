const inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'input',
        name: 'manager',
        message: `What is the Team Manager's name?`,
    },
    {
        type: 'input',
        name: 'id',
        message: `What is the Team Manager's employee ID?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the Team Manager's email?`,
    },
    {
        type: 'input',
        name: 'office',
        message: `What is the Team Manager's office number?`,
    },
    {
        type: 'list',
        name: 'menu',
        message: `Which type of team member would you like to add?`,
        choices: ['Engineer', 'Intern', 'Finish building my team']
    },
])