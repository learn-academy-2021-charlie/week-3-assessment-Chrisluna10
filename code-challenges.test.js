// ASSESSMENT 3: Coding practical questions with Jest

const { TestWatcher } = require("jest")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

describe("fibo", () => {
    // a test method that describes what the function will do
    test("returns array with accumulating sum", () => {
    // what the expected output will be
            expect(fibo(6).toEqual([1, 1, 2, 3, 5, 8]))
            expect(fibo(10).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]))
            
    })
})

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Create a function
// Parameter - array
// Iteration - for loop
const fibo = (number) => {
    let answerArr = (1,1)
    for(let i=2; i<number; i++){
        answerArr.push(answerArr(i-2) + answerArr(i-1))
    }
    return answerArr
}
//test did not pass and says there is an error in the expect method. Tried running console.log and answerArr was undefined. 

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
// create a describe method that lists the name of the function
describe("odd", () => {
    // a test method that describes what the function will do
    test("returns array with odd numbers least to greatest", () => {
    // what the expected output will be
            expect(odd(fullArr1).toEqual([-9, 7, 9, 199]))
            expect(odd(fullArr2).toEqual([-823, 7, 23]))
    })
})

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
// create a function that takes in an array and returns new array.

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.
const onlyOdd = (array) => {
    let filteredArr = array.filter(value => {
      typeof value === "number" && value % 2 !== 0
       })
       return onlyOdd.sort((a, b) => a - b)
  }
  console.log(onlyOdd.sort((a, b) => a - b))


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// Create a function
// Parameter - array
// Iteration - map or for loop

// a) Create a test with expect statements for each of the variables provided.

describe("sum", () => {
    // a test method that describes what the function will do
    test("returns array with accumulating sum", () => {
    // what the expected output will be
            expect(sum(numbersToAdd1).toEqual([2, 6, 51, 60]))
            expect(sum(numbersToAdd2).toEqual([0, 7, -1, 11]))
            expect(sum(numbersToAdd3).toEqual([]))
    })
})

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []



// b) Create the function that makes the test pass.
// Create a function
// Parameter - array
// Iteration - for loop
const sum = (array) => {
    if(array.length > 0){
        let arraySum = [array[0]]
        for(let i=1; i<array.length; i++){
        arraySum.push(array[i] + arraySum(i - 1))
    }
    return arraySum
}
return []
}