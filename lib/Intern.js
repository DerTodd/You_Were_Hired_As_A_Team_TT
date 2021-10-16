const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        //super(Employee.name, Employee.id, Employee.email);
        super('Sid', "666-b", 'sid@badcompany.com')
        this.school = school;
    }
    getSchool() {
        console.log(this.school)
    };
    getRole() {
        if(this.school !== ""){
            console.log("Intern");
        }else{
            console.log("Employee")
        }
    }
}
const intern = new Intern(`burger-flippin-u`)

console.log('---Intern---');
//intern.printInfo();
console.log(intern);
intern.getSchool();
intern.getRole();
// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`