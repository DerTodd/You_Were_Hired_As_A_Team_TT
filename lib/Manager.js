const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,id,email,role,officeNumber) {
        //super(Employee.name, Employee.id, Employee.email);
        super(name, id, email, role)
        this.officeNumber = officeNumber;
    }
    // getRole(){
    //     if (this.officeNumber !== "") {
    //     console.log("Manager")}else{
    //         console.log("Employee")
    //     }
    // };
};
const manager = new Manager("Crowley","666A","crowley@badcompany.com","Employee","666-1");
Manager.prototype.getRole = function () {
    this.role = "Manager";
  };

console.log('---Manager---');
//manager.printInfo();
console.log(manager);
manager.getRole();
// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`
module.exports = Manager