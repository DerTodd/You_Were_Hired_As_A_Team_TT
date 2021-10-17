const Intern = require("../lib/Intern");

 describe("getRole", () => {
   describe("Initialization", () => {
      it("should return the corrent role for the intern", () => {
//       const obj = new Arithmetic();
      const intern = new Intern('bob','53','bob@email.com','Employee','UT');
//       expect("number" in obj).toEqual(true);
      intern.getRole();
      expect(intern.role).toBe("Intern");
    });
   });
});

// test('Test to see if role is changed', function() {
//      expect(intern.getRole().toBe("Intern"));
//  });
//  test('test adding two positive nums', function() {
//     expect(testFns.testForAdd(4, 5)).toBe(9);
//  });