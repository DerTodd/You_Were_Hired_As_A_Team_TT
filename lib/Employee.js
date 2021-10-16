class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    printInfo() {
        console.log(`The employee's name is ${this.name}`);
        console.log(`The emplyee's id is ${this.id}`);
        console.log(`The employee's email is ${this.email}`)
    };
    getName() {
        console.log(this.name)
    };
    getId() {
        console.log(this.id)
    };
    getEmail() {
        console.log(this.email)
    };
    getRole() {
        console.log("Employee")
    };
}

module.exports = Employee;
// `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`