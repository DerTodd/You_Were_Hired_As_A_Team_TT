const inquirer = require('inquirer');
const fs = require('fs');

// const generateHTML = ({ name, location, github, linkedin }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: "What is the employee's name?",
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: "Employee's ID number:",
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: "Employee's email",
//     },
//     {
//       type: 'rawlist',
//       name: 'type',
//       message: 'Employee Type',
//       choices: ['Manager', 'Engineer', 'Standard Employee', 'Intern']
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username',
//     },
//     {
//       type: 'input',
//       name: 'linkedin',
//       message: 'Enter your LinkedIn URL.',
//     },
//   ])
//   .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//         console.log("Prompt is in the wrong environment.")
//       } else {
//         console.log("You'll be fired as a team.  This isn't working out.")
//       }
//     });

/**
 * Filter and validate progress example
 */

//  const questions = [
//     {
//       type: 'confirm',
//       name: 'bacon',
//       message: 'Do you like bacon?',
//     },
//     {
//       type: 'input',
//       name: 'favorite',
//       message: 'Bacon lover, what is your favorite type of bacon?',
//       when(answers) {
//         return answers.bacon;
//       },
//     },
//     {
//       type: 'confirm',
//       name: 'pizza',
//       message: 'Ok... Do you like pizza?',
//       when(answers) {
//         return !likesFood('bacon')(answers);
//       },
//     },
//     {
//       type: 'input',
//       name: 'favorite',
//       message: 'Whew! What is your favorite type of pizza?',
//       when: likesFood('pizza'),
//     },
//   ];
  
//   function likesFood(aFood) {
//     return function (answers) {
//       return answers[aFood];
//     };
//   }
  
//   inquirer.prompt(questions).then((answers) => {
//     console.log(JSON.stringify(answers, null, '  '));
//   });




  const output = [];

const questions = [
  {
    type: 'input',
    name: 'tvShow',
    message: "What's your favorite TV show?",
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Want to enter another TV show favorite (just hit enter for YES)?',
    default: true,
  },
];

function ask() {
  inquirer.prompt(questions).then((answers) => {
    output.push(answers.tvShow);
    if (answers.askAgain) {
      ask();
    } else {
      console.log('Your favorite TV Shows:', output.join(', '));
    }
  });
}

ask();