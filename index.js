const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const endHTML =
`
</div>
</div>
</main>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous">
</script>
</html>
`;
const enamendHTML = (engineer) =>
`
<div class="card cols clr">
    <div class="engineers">
        <div id="${engineer.name}" class="container">
        <h2 class="en_name display-4">${engineer.name}</h2>
            <h3><span class="badge badge-secondary">Engineer</span></h3>
            <ul class="list-group">
            <li class="list-group-item">ID ${engineer.id}</li>
            <li class="list-group-item"><a href="mailto:${engineer.email}">Email: ${engineer.name}</a></li>
            <li class="list-group-item"><a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
</div>    
`;
const inamendHTML = (intern) =>
`
<div class="card cols clr">
    <div class="interns">
        <div id="${intern.name}" class="container">
            <h2 class="in_name display-4">${intern.name}</h2>
            <h2><span class="badge badge-secondary">Intern</span></h2>
            <ul class="list-group">
            <li class="list-group-item">ID ${intern.id}</li>
            <li class="list-group-item"><a href="mailto:${intern.email}">Email: ${intern.name}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
</div>
`;
const generateHTML = (manager) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href='./style.css'>
    <title>Bad Company</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid blue cursive">
        <h1>Bad Company</h1>
        <banner>It's Fine.  Everything's Fine</banner>
    </div>
    <main> 
    <div class="content flow">
    <div class="grid-ish">
        <div class="card cols clr">   
            <div id="manager"class="container">
                <h2 class="display-4">${manager.name}</h2>
                <h2><span class="badge badge-secondary">Manager</span></h2>
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">ID ${manager.id}</li>
                        <li class="list-group-item"><a href="mailto:${manager.email}">Email: ${manager.name}</a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>    
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
    message: "Manager's ID number:",
    },
    {
    type: 'input',
    name: 'email',
    message: "Manager's email",
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
    message: "Engineer's ID number:",
    },
    {
    type: 'input',
    name: 'email',
    message: "Engineer's email",
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
    message: "Engineer's Github name:",
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
    message: "Intern's ID number:",
    },
    {
    type: 'input',
    name: 'email',
    message: "Intern's email",
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
    choices: ['Engineer', 'Intern', 'Build Website']
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
