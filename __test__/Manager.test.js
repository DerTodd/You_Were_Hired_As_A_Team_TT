//test change of role
const Manager = require("../lib/Manager");

 describe("getRole", () => {
   describe("Initialization", () => {
      it("should return the corrent role for the manager", () => {
//       const obj = new Arithmetic();
      const manager = new Manager('bob','53','bob@email.com','Employee','543A');
//       expect("number" in obj).toEqual(true);
      manager.getRole();
      expect(manager.role).toBe("Manager");
    });
   });
});