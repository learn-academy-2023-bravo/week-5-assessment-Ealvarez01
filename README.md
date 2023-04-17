# Assessment for Week 5

<!--    T   E  M  P  L  A  T   E  #1   -->
// TEMPLATE OF A TEST
// describe("greeter", () => {
//   it("returns a generic greeting", () => {
//     expect(greeter()).toEqual("Hello, LEARN student!")
//   })
// })

<!--    T   E  M  P  L  A  T   E  #2   -->
// TEMPLATE FOR PSEUDOCODE
// Function Signature

// input: number
// output: string indicating allowed, denied, or error

// input: 39
// output: "Cannot ride the rollercoaster"

// PROCESS
// create a function called tallEnough that takes in a number called height
// if height is less than 40 return "Cannot ride the rollercoaster"
// if height is greater than or equal to 40 return "Buckle up, let's ride"
// any other input return error

<!--    T   E  M  P  L  A  T   E  #3   -->
// TEMPLATE OF A FUNCTION
// const greeter = () => {
//   return "Hello, LEARN student!"
// }

<!--  E  X  A  M  P  L  E    F  O  R    T  E  M  P  L  A  T  E    #1  -->

// PROMPTS
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// describe(name of function as a string, callback function)
  // it(description of the function as a string, callback function)
    // expect statement with the function call and the jest matcher with the expected output

// describe("greeter", () => {
//   it("returns a generic greeting", () => {
//     expect(greeter()).toEqual("Hello, LEARN student!")
//   })
// })

// Good failure:
 // FAIL  ./week.test.js

<!--  E  X  A  M  P  L  E    F  O  R    T  E  M  P  L  A  T  E    #2  -->
// Create the function that will make the test pass.

// TEMPLATE FOR PSEUDOCODE
// Function Signature

// input: number
// output: string indicating allowed, denied, or error

// input: 39
// output: "Cannot ride the rollercoaster"

// PROCESS
// create a function called tallEnough that takes in a number called height
// if height is less than 40 return "Cannot ride the rollercoaster"
// if height is greater than or equal to 40 return "Buckle up, let's ride"
// any other input return error

<!--  E  X  A  M  P  L  E    F  O  R    T  E  M  P  L  A  T  E    #3  -->
// Function
  const doubler = (number) => {
    return number * 2
  }

// Passing
//  PASS  ./week.test.js