const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name,id,email,role,school) {
        //super(Employee.name, Employee.id, Employee.email);
        super(name,id,email,role,)
        this.school = school;
    }
    getSchool() {
        console.log(this.school)
    };
    getRole() {
        if(this.school === "" || this.school === null || this.school === undefined){
            console.log("Employee");
        }else{
            console.log("Intern")
        }
    }
}
const intern = new Intern("UT")

console.log('---Intern---');
//intern.printInfo();
console.log(intern);
intern.getSchool();
intern.getRole();
// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`
module.exports = Intern