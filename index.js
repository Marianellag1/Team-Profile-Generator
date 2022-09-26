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
                {
                    type: 'list',
                    name: 'menu',
                    message: `Which type of team member would you like to add?`,
                    choices: ['Engineer', 'Intern', 'Finish building my team']
                },
            ]) .then(ans => {
                console.log(ans);
                const manager = new Manager (ans.name, ans.id, ans.email, ans.office);
                teamArray.push(manager);
                employeeMenu();
            });


                
            // .then(employee => {
            //     switch (employee.userChoice) {
    
            //         case "Engineer":
            //             addEngineer();
            //             break;
            //         case "Intern":
            //             addIntern();
            //             break;
            //         default://write here for html
            //             break;
            //     }
            // })
        }
    
    

//  function addEngineer()
//  function addIntern()

// inquirer
// .prompt([
// ])