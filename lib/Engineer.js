const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        //super(Employee.name, Employee.id, Employee.email);
        super('Bill', "666", 'bob@badcompany.com')
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