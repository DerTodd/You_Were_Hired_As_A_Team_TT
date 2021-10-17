//test change of role
const Engineer = require("../lib/Engineer");

 describe("getRole", () => {
   describe("Initialization", () => {
      it("should return the corrent role for the engineer", () => {
//       const obj = new Arithmetic();
      const engineer = new Engineer('bob','53','bob@email.com','Employee','github');
//       expect("number" in obj).toEqual(true);
      engineer.getRole();
      expect(engineer.role).toBe("Engineer");
    });
   });
});