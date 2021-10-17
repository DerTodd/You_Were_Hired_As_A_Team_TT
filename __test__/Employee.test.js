// const Employee = require("../lib/Employee");
const Employee = require("../lib/Employee");

 describe("getRole", () => {
   describe("Initialization", () => {
      it("should return the corrent role for the standard employee", () => {
//       const obj = new Arithmetic();
      const employee = new Employee('Ralph','Low43','ralph@email.com','Employee');
//       expect("number" in obj).toEqual(true);
      employee.getRole();
      expect(employee.role).toBe("Contract Collector");
    });
   });
});