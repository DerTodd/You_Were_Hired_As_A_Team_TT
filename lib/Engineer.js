const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name,id,email,role,github) {
        //super(Employee.name, Employee.id, Employee.email);
        super(name,id,email,role,)
        this.github = github;
    }
    getGithub() {
        console.log(this.github)
    };
    getRole() {
        if(this.github !== ""){
            console.log("Engineer");
        }else{
            console.log("Employee")
        }
    }
}
const engineer = new Engineer('https://github.com/' + 'mikes')

console.log('---Engineer---');
//engineer.printInfo();
console.log(engineer)
engineer.getGithub();
engineer.getRole();
// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`
module.exports = Engineer