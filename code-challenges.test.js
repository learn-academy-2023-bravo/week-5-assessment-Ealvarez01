// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

//describe(name of function as a string, callback function)
describe("codeMessage", () => {
  const secretCodeWord1 = "Lackadaisical"
  // Expected output: "L4ck4d41s1c4l"
  const secretCodeWord2 = "Gobbledygook"
  // Expected output: "G0bbl3dyg00k"
  const secretCodeWord3 = "Eccentric"
  // Expected output: "3cc3ntr1c"

//it(description of the function as a string, callback function)
  it("takes in a string with a coded message, the coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
    
//expect(statement with the function call and jest matcher with the expected output) 
    expect(codeMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    
    expect(codeMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    
    expect(codeMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// FAIL  ./code-challenges.test.js
// codeMessage
//   ✕ takes in a string with a coded message, the coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0

// ● codeMessage › takes in a string with a coded message, the coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0

//   ReferenceError: codeMessage is not defined


// b) Create the function that makes the test pass.

// PSEUDOCODE
// input: string
// output: string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// input: "Lackadaisical"
// output: "L4ck4d41s1c4l"

// input: "Gobbledygook"
// output: "G0bbl3dyg00k"

// input: "Eccentric"
// output: "3cc3ntr1c"

// PROCESS:
// Create a function named "codeMessage" that takes in a string parameter named "(string)" and returns a string with a coded message.
// Declare a variable named "message" to equal and invoke the "string" and use the .split() method and set quotations in the parameters as an argument ("") which turns the string into an array and tells the function to seperate/split each letter character including any spaces. 
// Create a new conditional statement named "newMessage" to equal the "message" logic and use the .map() method that will reference the letter as an argument in the parameter which will include specific logic that creates a new string that calls on the function to iterate over each letter element in the string and does not change the original string.  
// Include in the conditional statement (if) we reference a "letter" using an equality operator to strictly/only equal (===) a given letter "a" (if lowercase) and use a logical OR operator(||) that checks true or false if one or both values are true, otherwise return false if letter strictly equals (===) the letter "A" (if capitalized). This logic checks whether the two values are equal and we need to return a number "4" in the string in its place, only if the data equals the given letter.
// Repeat the same process for each condition for letter "e" or "E" to return number "3" in its place, for letter "i" or "I" to return number "1" in its place and for letter "o" or "O" to return number "0" in its place. 
// For the last condition, set a return to include the rest of the letters in the string.
// Return the newMessage condition coded message that converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0 which holds all of the logic and use the .join() method with double quotations in the parameter as an argument ("") which returns the array as a string and joins/puts all the letters back next to each other in the string.


const codeMessage = (string) => {
  let message = string.split("")

  newMessage = message.map((letter) => {
    if (letter === "a" || letter === "A") {
      return "4"
    } 
    else if (letter === "e" || letter === "E") {
      return "3"
    } 
    else if (letter === "i" || letter === "I") {
      return "1"
    } 
    else if (letter === "o" || letter === "O") {
      return "0"
    } 
    else {
      return letter
    }
  })
  return newMessage.join("")
}

// PASS  ./code-challenges.test.js
// codeMessage
//   ✓ takes in a string with a coded message, the coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.155 s, estimated 1 s


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

//describe(name of function as a string, callback function)
describe("wordsLetter", () => {
  const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

  const letterA = "a"
  // Expected output: ["Mango", "Apricot", "Peach"]
  const letterE = "e"
  // Expected output: ["Cherry", "Blueberry", "Peach"]

//it(description of the function as a string, callback function)
  it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
    
//expect(statement with the function call and jest matcher with the expected output) 
    expect(wordsLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    
    expect(wordsLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

// FAIL  ./code-challenges.test.js
// wordsLetter
//   ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)

// ● wordsLetter › takes in an array of words and a single letter and returns an array of all the words containing that particular letter

//   ReferenceError: wordsLetter is not defined


// b) Create the function that makes the test pass.

// PSEUDOCODE
// input: array and single letters "a" & "e"
// output: an array of all the words containing that particular letter.

// Given array:
// input: ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

// input: "a"
// output: ["Mango", "Apricot", "Peach"]

// input: "e"
// output: ["Cherry", "Blueberry", "Peach"]

// PROCESS:
// Create a function named "wordsLetter" takes in an array of words in a parameter as an argument named "array" and a single letter argument named "string" and returns a new array of all the words containing that particular letter.
// Declare a function named "newArray" to equal and invoke the "array" argument and use the .filter() method that creates a new array with elements that passes the test given by the conditional statements. This method does not change the original array. Set the parameter to take in the "word" as an argument because we want to see if a word contains a certain letter. It tells the function to filter/search each word in the string. 
// Create a conditional statement (if) to invoke the "word" argument" and use the .includes() method that will return true if the array contains a particular letter value and false if it not found and set the .includes() method to invoke the "word" argument. This returns the array to output the word with only a specific letter in the string.  
// Include in the conditional statement (elseif) the word includes a capital letter and use the .toUpperCase() method that changes the string to uppercase letters but does not change the string. This tells the function that if any of the letters are uppercased this logic will check and still apply and return any word that has that letter whether it is lowercase or uppercase. 
// Return the newArray function which holds all of the logic that returns an array of all the words containing that particular letter.

  const wordsLetter = (array, string) => {
    const newArray = array.filter((word) => {
      if (word.includes(string)) {
      return word
      } 
      else if (word.includes(string.toUpperCase())) {
      return word
      } 
    })
      return newArray
  }

// PASS  ./code-challenges.test.js
// wordsLetter
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.157 s, estimated 1 


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

//describe(name of function as a string, callback function)
describe("fullHouse", () => {
  const hand1 = [5, 5, 5, 3, 3]
  // Expected output: true
  const hand2 = [5, 5, 3, 3, 4]
  // Expected output: false
  const hand3 = [5, 5, 5, 5, 4]
  // Expected output: false
  const hand4 = [7, 2, 7, 2, 7]
  // Expected output: true

//it(description of the function as a string, callback function)
  it("takes in an array of 5 numbers and determines whether or not the array is a 'full house", () => { 
    
//expect(statement with the function call and jest matcher with the expected output)
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)
  })
})

// FAIL  ./code-challenges.test.js
// fullHouse
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a 'full house

// ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a 'full house

//   ReferenceError: fullHouse is not defined


// b) Create the function that makes the test pass.

// PSEUDOCODE
// input: an array of 5 numbers
// output: determines if an array is a 'full house

// Given arrays:
// input: [5, 5, 5, 3, 3]
// output: true

// input: [5, 5, 3, 3, 4]
// output: false

// input: [5, 5, 5, 5, 4]
// output: false

// input: [7, 2, 7, 2, 7]
// output: true

// PROCESS:
// Create a function named "fullHouse" that takes in an array of 5 numbers in a parameter named "numbers" as an argument and determines whether or not the array is a 'full house.
// Declare a function named "count" to equal and invoke an empty array of brackets ([]) and we don't want to pass anything in the brackets so that any index value can be checked.  
// Create a for loop (for) that will let the starting index equal zero (i = 0), the numbers in the array to keep its length of five (i<numbers.length) and the numbers to equal the index plus one (i++). This will allow us to run the same code over and over again, each time with a different value.   
// Include in the for loop to call on the count function of the numbers within the array with any index to equal the count of the numbers within the array with any index to add 1 or 1 (one-to-one) to compare the values at the indexes to see if there are 2 or 3 of the same kind.
// Create a function named "values" and use the Object.values() static method that returns an array of the given array's own index values (since those were given) counted by one-to-one and call on the "count" argument to add it together with the count function logic.  
// Return and invoke the "values" function to use the .includes() method that will return true if the array contains a particular value and false if it is not found and set the parameter argument to the number "2" which tells the function that one pair (2) and, using the && logical operator to determine the logic between the index values to also invoke the values function using the .includes() method that sets the number "3" as an argument, to include three-of-a-kind (3) values which must be included in the hand of five numbers in order to return true or false if a hand contains a full house.

  const fullHouse = (numbers) => {
    let count = []
      for(let i = 0;i <numbers.length; i++) {
        count[numbers[i]] = count[numbers[i]] + 1 || 1
      }
    const values = Object.values(count)
    return values.includes(2) && values.includes(3)
  }

//   PASS  ./code-challenges.test.js
//   fullHouse
//     ✓ takes in an array of 5 numbers and determines whether or not the array is a 'full house (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.16 s, estimated 1 s