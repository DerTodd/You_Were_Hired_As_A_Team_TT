const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,id,email,role,officeNumber) {
        //super(Employee.name, Employee.id, Employee.email);
        super(name, id, email, role)
        this.officeNumber = officeNumber;
    }
    getRole(){
        if (this.officeNumber !== "") {
        console.log("Manager")}else{
            console.log("Employee")
        }
    };
};
const manager = new Manager(`Hell Circle 3`)

console.log('---Manager---');
//manager.printInfo();
console.log(manager);
manager.getRole();
// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`
module.exports = Manager