const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const template = require('./src/template');



const teamArray = [];

const addManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
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
        ])
        .then(ans => {
            console.log(ans);
            const manager = new Manager(ans.name, ans.id, ans.email, ans.office);
            teamArray.push(manager);
            employeeMenu();
        });
};

const employeeMenu = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: `Which type of team member would you like to add?`,
                choices: ['Engineer', 'Intern', 'Finish building my team']

            }
        ]).then(employee => {
            switch (employee.menu) {

                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    createTeam();
                    break;
            }
        })
};

const addEngineer = () => {
    inquirer
        .prompt([

            {
                type: 'input',
                name: 'name',
                message: `What is the Engineer's name?`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the Engineer's employee ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the Engineer's email?`,
            },
            {
                type: 'input',
                name: 'github',
                message: `What is the Engineer's GitHub username?`,
            },

        ]).then(ans => {
            console.log(ans);
            const engineer = new Engineer(ans.name, ans.id, ans.email, ans.github);
            teamArray.push(engineer);
            employeeMenu();
        });
};

const addIntern = () => {
    inquirer
        .prompt([

            {
                type: 'input',
                name: 'name',
                message: `What is the Intern's name?`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the Intern's employee ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the Intern's email?`,
            },
            {
                type: 'input',
                name: 'school',
                message: `What school did the Intern go to?`,
            },

        ]).then(ans => {
            console.log(ans);
            const intern = new Intern(ans.name, ans.id, ans.email, ans.office, ans.school);
            teamArray.push(Intern);
            employeeMenu();
        });
};


addManager()

function createTeam() {
    fs.writeFile('teamgenerator.html', template(teamArray), function (err) {
        if (err) {
            return console.log(err)
        }
    })};