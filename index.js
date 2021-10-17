const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = ({ name, location, github, linkedin }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">Hi! My name is ${name}</h1>
        <p class="lead">I am from ${location}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
            <li class="list-group-item">My GitHub username is ${github}</li>
            <li class="list-group-item">LinkedIn: ${linkedin}</li>
        </ul>
    </div>
    </div>
</body>
</html>`;


const output = [];

const managerQuestions = [
    {
    type: "input",
    name: "tvShow",
    message: "What's your favorite TV show?",
    },
    {
    type: 'input',
    name: 'name',
    message: "What is the employee's name?",
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
    choices: ['Manager']
    },
    {
    type: "confirm",
    name: "askAgain",
    message: "Want to enter another TV show favorite (just hit enter for YES)?",
    default: true,
    },
];

const engineerQuestions = [
    {
    type: 'input',
    name: 'name',
    message: "What is the employee's name?",
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
    // {
    // type: "confirm",
    // name: "askAgain",
    // message: "Do you want to enter another engineer or intern?",
    // default: true,
    // },
];
const internQuestions = [
    {
    type: 'input',
    name: 'name',
    message: "What is the employee's name?",
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
    message: 'Which employee type would you like to build?',
    choices: ['Engineer', 'Intern', 'Exit']
    },
];

function ask() {
  inquirer.prompt(managerQuestions).then((answers) => {
    output.push(answers);
    console.log(answers);
    //const employee = new Employee(answers.name, answers.id, answers.email);
    //console.log(employee);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.type, answers.tvShow)
    //const engineer = new Engineer('https://github.com/' + answers.tvShow)
    console.log(manager);
    console.log("Your favorite TV Shows:", output.join(", "));
    console.log(output);
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
        } else {
            return
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
        askEngineerIntern()
    });
  }
ask();
