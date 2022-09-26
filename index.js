const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');



const teamArray = [];

const addManager = () => {
    return inquirer
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
        ]).then(ans => {
            console.log(ans);
            const manager = new Manager(ans.name, ans.id, ans.email, ans.office);
            teamArray.push(manager);
            employeeMenu();
        });
}


const employeeMenu = () => {
    return inquirer
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
}

const addEngineer = () => {
    return inquirer
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
            const Engineer = new Engineer (ans.name, ans.id, ans.email, ans.office, ans.github);
            teamArray.push(Engineer);
            employeeMenu();
        });
};

const addIntern = () => {
    return inquirer
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
            const Intern = new Intern(ans.name, ans.id, ans.email, ans.office, ans.school);
            teamArray.push(Intern);
            employeeMenu();
        });
};

const createTeam = () => {
    console.log(`   
============
TEAM CREATED
============`);
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    } else {

        fs.writeFileSync(outputPath, genTeam(teamArray), "UTF-8");

    };
}

addManager();

//  function addEngineer()
//  function addIntern()

// inquirer
// .prompt([
// ])