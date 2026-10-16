// variables - const & let
const country = "Kenya";
console.log(country);

// example 2; let for variables that can change
let continent = "Africa";
console.log(continent);

// Data types - strings, numbers, booleans, null, undefined, objects, arrays
// Strings - text
let name = "John Doe";
console.log(name);

// Numbers - integers and floats
let age = 30;
let height = 5.9;
console.log(age);
console.log(height);

// Booleans - true or false
let isStudent = true;
let hasDriverLicense = false;
console.log(isStudent);
console.log(hasDriverLicense);

// Null - intentional absence of a value
let emptyValue = null;
console.log(emptyValue);

// Undefined - a variable that has been declared but not assigned a value
let undefinedValue;
console.log(undefinedValue);

// Objects - collections of properties

// Arrays - ordered lists of values
let colors = ["red", "green", "blue"];
console.log(colors);

// My example of an object with arrays
const student = {
  name: "Jane Nashipae",
  age: 22,
  hasCar: false,
  colors: ["red", "green", "blue"]
};
console.log(student);

// Content literals using backticks
let firstName = "Jane";
let lastName = "Nashipae";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// variable
const studentName = "Jane Nashipae";
let greeting = `Good afternoon, ${studentName}!`;

console.log(greeting);

const city = "Mombasa";
const currentTemperature = 29;
console.log(`The current temperature in ${city} is ${currentTemperature}°C.`);
 

console.log(10+10);
console .log("10"+ "10");




// 1Creating and indexing arrays
const students = ["Jane", "John", "Mary", "Peter", "Paul"];
console.log(students[0]); // Output: Jane
console.log(students[1]); // Output: John
console.log(students[2]); // Output: Mary
console.log(students[3]); // Output: Peter
console.log(students[4]); // Output: Paul

//2 Adding and removing elements from arrays
students.push("David"); // Adding an element to the end of the array
console.log(students); // Output: ["Jane", "John", "Mary", "Peter", "Paul", "David"]
console.log("Updated list of students after adding David:", students);
console.log("Number of students after adding David:", students.length);

// 3. Filters ; finding specisfic items
const examScores = [85, 92, 78, 96, 88];
const highScores = examScores.filter(score => score > 90);
console.log("High scores:", highScores);

//3 .  .map() ; transforming arrays to new formats
const formattedScores = examScores.map(score => `Score: ${score}/100`);
console.log("Formatted scores:", formattedScores);

// 4 Obejects {} & key value dictionaries


// skills & arrow syntax
function add (a+b) {return a+b};
const add = (a, b) => a + b;

//1 standard function syntax
function calculate discount(originalprice, discountpercentage/100) {
