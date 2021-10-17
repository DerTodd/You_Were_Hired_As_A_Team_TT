class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
        this.role = "Contract Collector"

    }

    printInfo() {
        console.log(`The employee's name is ${this.name}`);
        console.log(`The emplyee's id is ${this.id}`);
        console.log(`The employee's email is ${this.email}`)
    };
    getName() {
        console.log(this.name)
        return this.name
    };
    getId() {
        console.log(this.id)
        return this.id;
    };
    getEmail() {
        console.log(this.email)
        return this.email;
    };

}
const employee = new Employee("Fred","1010","Fred@badcompany.com","Employee")
Employee.prototype.getRole = function(){
    this.role = "Contract Collector"
}
console.log(employee)
//const employee = new Employee(name, id, email);
//getRole();
module.exports = Employee;
// `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`