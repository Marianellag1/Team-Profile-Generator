
const inputManager = function (manager) {
    return `
                     <div class="col-4 mt-4">
                         <div class="card container" style="width: 18rem;">
                             <div class="card-body">
                                 <h5 class="card-title">${manager.name}</h5>
                                 <h4><img src="https://img.icons8.com/ios-filled/50/000000/coffee.png"/>Manager</4>
                                 <ul class="list-group list-group-flush">
                                     <li class="list-group-item">ID: ${manager.id}</li>
                                     <li class="list-group-item"><p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p></li>
                                     <li class="list-group-item">${manager.office}</li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                     `
};

const inputEngineer = function (engineer) {
    return `
                     <div class="col-4 mt-4">
                         <div class="card container" style="width: 18rem;">
                             <div class="card-body">
                                 <h5 class="card-title">${engineer.name}</h5>
                                 <h4><img src="https://img.icons8.com/ios/50/000000/engineer.png"/>Engineer</h4>
                                 <ul class="list-group list-group-flush">
                                     <li class="list-group-item">${engineer.id}</li>
                                     <li class="list-group-item"><p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p></li>
                                     <li class="list-group-item"><p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p></li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                 `
}

const inputIntern = function (intern) {

    return ` 
                     <div class="col-4 mt-4">
                         <div class="card container" style="width: 18rem;">
                             <div class="card-body">
                                 <h5 class="card-title">${intern.name}</h5>
                                 <h4><img src="https://img.icons8.com/ios-filled/50/000000/internship.png"/>Intern</h4>
                                 <ul class="list-group list-group-flush">
                                     <li class="list-group-item">${intern.id}</li>
                                     <li class="list-group-item"><p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p></li>
                                     <li class="list-group-item">${intern.school}</li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                     `}

template = (ans) => {

    teamArray = [];
    
    for (let i = 0; i < ans.length; i++) {
        const employee = ans[i];
        const role = employee.getRole();
        
        if (role === "Manager") {
            const managerEmployee = inputManager(employee);

            teamArray.push(managerEmployee);
        }

        if (role === "Engineer") {
            const engineerEmployee = inputEngineer(employee);

            teamArray.push(engineerEmployee);
        }

        if (role === "Intern") {//for some reason its not allowing intern to go thru, im not understanding the error.
            const internEmployee = inputIntern(employee);

            teamArray.push(internEmployee);
        }
    }

    const teamMembers = teamArray.join('')

    const createTeam = createTeamPage(teamMembers);
    return createTeam;
}

const createTeamPage = function (teamMembers) {
    return `
                      <!DOCTYPE html>
                      <html lang="en">
                      
                      <head>
                          <meta charset="UTF-8">
                          <meta http-equiv="X-UA-Compatible" content="IE=edge">
                          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                          <link rel="stylesheet" href="./style.css">
                          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
                          <title>My Team Generator</title>
                          </head>
                          
                          <body>
                          
                          <header>
                          <div class="jumbotron jumbotron-fluid"  style=" background-color: #e84756;">
                          <div class="container">
                          <h1 class="display-4">My Team</h1>
                          </div>
                          </div>
                          </header> 

                          <main>
                          <div class="container">
                          <div class="row justify-content-center" id="employee-cards">
                         ${teamMembers}
                        </div>
                         </div>
                         
                         </main>
                         </body>
                         
                         </html>
                         `
}

module.exports = template;
