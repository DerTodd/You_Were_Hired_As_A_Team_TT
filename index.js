const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const endHTML =
`</main>
</body>
</html>
`;
const enamendHTML = (engineer) =>
`
    <div class="engineers">
    <div id="${engineer.name}" class="container">
    <h2 class="en_name display-4">Engineer</h2>
        <p class="lead">Engineer</p>
        <h3>${engineer.name}<span class="badge badge-secondary">Engineer</span></h3>
        <ul class="list-group">
        <li class="list-group-item">ID ${engineer.id}</li>
        <li class="list-group-item">Email: ${engineer.email}</li>
        <li class="list-group-item">Github Information: ${engineer.github}</li>
        </ul>
    </div>
    </div>
`;
const inamendHTML = (intern) =>
`
<div class="interns">
    <div id="${intern.name}" class="container">
        <h2 class="in_name display-4">Intern</h2>
        <p class="lead">Intern</p>
        <h3>${intern.name} <span class="badge badge-secondary">Intern</span></h3>
        <ul class="list-group">
        <li class="list-group-item">ID ${intern.id}</li>
        <li class="list-group-item">Email: ${intern.email}</li>
        <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
</div>
`;
const generateHTML = (manager) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href='./style.css'>
    <title>Bad Company</title>
</head>
<body>
    <div class="topbc jumbotron jumbotron-fluid">
        <banner>It's Fine.  Everything's Fine</banner>
    </div>
    <main>    
    <div id="manager"class="container">
        <h2 class="display-4">${manager.name}</h2>
        <p class="lead">Manager</p>
        <div>
            <ul class="list-group">
                <li class="list-group-item">ID ${manager.id}</li>
                <li class="list-group-item">Email: ${manager.email}</li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>    
    </div>
    `;

//const htmlEnContent = enamendHTML
const output = [];

const managerQuestions = [

    {
    type: 'input',
    name: 'name',
    message: "What is the manager's name?",
    },
    {
    type: 'input',
    name: 'id',
    message: "Employee's ID number:",
    },
    {
    type: 'input',
    name: 'email',
    message: "Employee's email",
    },
    {
    type: 'input',
    name: 'officeNumber',
    message: "Manager's Office Number:",
    },
    {
    type: 'rawlist',
    name: 'type',
    message: 'Employee Type',
    choices: ['Manager']
    },
];

const engineerQuestions = [
    {
    type: 'input',
    name: 'name',
    message: "What is the engineer's name?",
    },
    {
    type: 'input',
    name: 'id',
    message: "Employee's ID number:",
    },
    {
    type: 'input',
    name: 'email',
    message: "Employee's email",
    },
    {
    type: 'rawlist',
    name: 'type',
    message: 'Employee Type',
    choices: ['Engineer', 'Intern']
    },
    {
    type: 'input',
    name: 'github',
    message: "Employee's Github name:",
    },
];
const internQuestions = [
    {
    type: 'input',
    name: 'name',
    message: "What is the intern's name?",
    },
    {
    type: 'input',
    name: 'id',
    message: "Employee's ID number:",
    },
    {
    type: 'input',
    name: 'email',
    message: "Employee's email",
    },
    {
    type: 'rawlist',
    name: 'type',
    message: 'Employee Type',
    choices: ['Engineer', 'Intern']
    },
    {
    type: "input",
    name: "school",
    message: "Which school is the intern attending?",
    },
];
const internOrEngineer =[
    {
    type: 'rawlist',
    name: 'enOrIn',
    message: 'Whould you like to add another employee?',
    choices: ['Engineer', 'Intern', 'Build Site']
    },
];

function ask() {
  inquirer.prompt(managerQuestions).then((answers) => {
    output.push(answers);
    console.log(answers);
    //const employee = new Employee(answers.name, answers.id, answers.email);
    //console.log(employee);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.type, answers.officeNumber)
    //const engineer = new Engineer('https://github.com/' + answers.tvShow)
    console.log(manager);
    //console.log("Your favorite TV Shows:", output.join(", "));
    console.log(output);
    const htmlPageContent = generateHTML(manager);

    fs.writeFile('./output/test.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
    askEngineerIntern()
  });
}
function askEngineerIntern() {
    inquirer.prompt(internOrEngineer).then((answers) => {
        console.log(answers);
        if (answers.enOrIn === "Engineer") {
        askEngineer();
        } else if (answers.enOrIn === "Intern") {
            askIntern();
        } else if (answers.enOrIn ===  'Build Site') {
            endIt();
        }
    });
  }
  function askEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
        output.push(answers);
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.type,"https://github.com" + answers.github)
        console.log(engineer);
        //console.log("Your favorite TV Shows:", output.join(", "));
        console.log(output);
        const htmlEnContent = enamendHTML(engineer);

    fs.appendFile('./output/test.html', htmlEnContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
        askEngineerIntern()
    });
  }
  function askIntern() {
    inquirer.prompt(internQuestions).then((answers) => {
        output.push(answers);
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.type,answers.school)
        console.log(intern);
        //console.log(output.join(", "));
        console.log(output);
        const htmlInContent = inamendHTML(intern);

    fs.appendFile('./output/test.html', htmlInContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
        askEngineerIntern()
    });
  }
  function endIt(){
    fs.appendFile('./output/test.html', endHTML, (err) =>
    err ? console.log(err) : console.log('Successfully ENDED THIS INSANITY index.html!')
    );
  }
ask();
