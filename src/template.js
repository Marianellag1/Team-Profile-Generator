const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const createTeam = function (teamArray) {
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
     <main>
     <section>
     <div class="jumbotron jumbotron-fluid"  style=" background-color: #e84756;">
     <div class="container">
     <h1 class="display-4">My Team</h1>
     </div>
     </div>
     </section> 
     </div>
    </div>
     </section>
    
    </main>
    </body>
    
    </html>
    `
    }

    const inputManager = function (teamArray) {
        return `
               <section>
             <div class="container">
                 <div class="row">
                     <div class="col">
                         <div class="card container" style="width: 18rem;">
                             <div class="card-body">
                                 <h5 class="card-title">${Manager.name}</h5>
                                 <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                 <ul class="list-group list-group-flush">
                                     <li class="list-group-item">ID: ${Manager.id}</li>
                                     <li class="list-group-item">${Manager.email}</li>
                                     <li class="list-group-item">${Manager.office}</li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                     `
    };
const inputEngineer = function (teamArray){
   return `
                     <div class="col">
                         <div class="card container" style="width: 18rem;">
                             <div class="card-body">
                                 <h5 class="card-title">${Engineer.name}</h5>
                                 <h6 class="card-subtitle mb-2 text-muted">${Engineer.menu}</h6>
                                 <ul class="list-group list-group-flush">
                                     <li class="list-group-item">${Engineer.id}</li>
                                     <li class="list-group-item">${Engineer.email}</li>
                                     <li class="list-group-item">${Engineer.github}</li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                     <div class="col">
                         <div class="card container" style="width: 18rem;">
                             <div class="card-body">
                                 <h5 class="card-title">${Engineer.name}</h5>
                                 <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                 <ul class="list-group list-group-flush">
                                     <li class="list-group-item">${Engineer.id}</li>
                                     <li class="list-group-item">${Engineer.email}</li>
                                     <li class="list-group-item">${Engineer.github}</li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                 </div>
                 `
}
const inputIntern = function(teamArray) {
      
return `  <div class="row">
                     <div class="col">
                         <div class="card container" style="width: 18rem;">
                             <div class="card-body">
                                 <h5 class="card-title">${Intern.name}</h5>
                                 <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                 <ul class="list-group list-group-flush">
                                     <li class="list-group-item">${Intern.id}</li>
                                     <li class="list-group-item">${Intern.email}</li>
                                     <li class="list-group-item">${Intern.school}</li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                     <div class="col">
                         <div class="card container" style="width: 18rem;">
                             <div class="card-body">
                                 <h5 class="card-title">${Intern.name}</h5>
                                 <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                 <ul class="list-group list-group-flush">
                                     <li class="list-group-item">${Intern.id}</li>
                                     <li class="list-group-item">${Intern.email}</li>
                                     <li class="list-group-item">${Intern.school}</li>
                                 </ul>
                             </div>
                         </div>
                    
                     </div>
                     `}

module.exports = createTeam;
module.exports = inputManager;
module.exports = inputEngineer;
module.exports = inputIntern;
