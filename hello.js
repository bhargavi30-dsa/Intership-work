//js assignemnt 1
let print= "Hello, World!";
console.log(print);
//2nd assigment(1st question)
const firstName = 'John';
const lastName = 'Doe';
let address = '123 Main Street';
let city = 'Anytown';
let country = 'USA';
let age = 30;
let gender = 'Male';
console.log('Name: ' + firstName + ' ' + lastName);
console.log('Address: ' + address + ', ' + city + ', ' + country);
console.log('Age: ' + age);
console.log('Gender: ' + gender);
//2nd question
// Declare an array of car names
const cars = ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes'];
console.log(cars);
//3rd question
// Define the college object with relevant properties
const college = {
    name: 'ABC University',
    city: 'Metropolis',
    nation: 'Countryland',
    courses: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering']
  };
  
  // Display the college information using string concatenation
  console.log('College Name: ' + college.name);
  console.log('City: ' + college.city);
  console.log('Nation: ' + college.nation);
  console.log('Courses Offered:');
  
  // Iterate over the courses array to print each course
  for (let i = 0; i < college.courses.length; i++) {
    console.log('- ' + college.courses[i]);
  }
//3rd assignment(1)
const message = 'She said, \"Learning JavaScript is fun!\"\nIt\'s essential to understand escape sequences:\n\t- New line: \\n\n\t- Tab space: \\t\n\t- Backslash: \\\\\n\t- Double quote: \\\"\n\t- Single quote: \\\'';
console.log(message);
//2 question
// Define the string
const school = 'highschool';

// Calculate the length of the string
const lengthOfSchool = school.length;
console.log('Length of the string:', lengthOfSchool); 

// Convert the string to lowercase
const lowerCaseSchool = school.toLowerCase();
console.log('Lowercase:', lowerCaseSchool); 

// Convert the string to uppercase
const upperCaseSchool = school.toUpperCase();
console.log('Uppercase:', upperCaseSchool); 
//3rd question
const word = 'JAVASCRIPT';
const extractedWord = word.substring(4, 10);
console.log(extractedWord); 
//4 question
const text = 'The green grass is greener on the other side of the green hill.';
const searchTerm = 'green';
const lastIndex = text.lastIndexOf(searchTerm);
console.log(lastIndex);
//5 question
const str = "0.28";
const num = Number(str);
console.log(num); 
//6 question
const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
//4 assignment(1)
let vegetables = ['Carrot', 'Potato', 'Spinach'];
console.log(vegetables); 
vegetables.push('Tomato');
console.log(vegetables); 
let lastVegetable = vegetables.pop();
console.log(lastVegetable); 
console.log(vegetables); 
vegetables.unshift('Cucumber');
console.log(vegetables); 
let firstVegetable = vegetables.shift();
console.log(firstVegetable);
console.log(vegetables);  
//2 question
let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;
let product = a*b;
let quotient = a / b; 
let remainder = a % b;
let square = a ** 2; 
//3rd question
let Nums = [0, 1, 2, 3, 4, 5, 6];
let secondLastElement = Nums[Nums.length - 2];
console.log(secondLastElement); 
//5 assigment(1)
let userInput = prompt("Please enter a number:");
let number = Number(userInput);
number += 3;
alert("The incremented number is: " + number);
//2 question
let points = 10;
points--; 
points--;
console.log(points);
//3rd question
// Define your age
const myAge = 30; // Replace 30 with your actual age

// Prompt the user to enter their age
const yourAge = prompt("Enter your age:");

// Convert the input from string to number
const yourAgeNumber = Number(yourAge);
if (isNaN(yourAgeNumber)) {
  console.log("Invalid input. Please enter a numerical value for age.");
} else {
  if (myAge > yourAgeNumber) {
    console.log("I am older than you by " + (myAge - yourAgeNumber) + " years.");
  } else if (myAge < yourAgeNumber) {
    console.log("You are older than me by " + (yourAgeNumber - myAge) + " years.");
  } else {
    console.log("We are of the same age.");
  }
}
//4 question
//creating function
function assignGrade(score) {
    if (score >= 80 && score <= 100) {
      return 'A';
    } else if (score >= 70 && score <= 79) {
      return 'B';
    } else if (score >= 60 && score <= 69) {
      return 'C';
    } else if (score >= 50 && score <= 59) {
      return 'D';
    } else if (score >= 0 && score <= 49) {
      return 'F';
    } else {
      return 'Invalid score';
    }
  }
  const studentScore = 85;
  const studentGrade = assignGrade(studentScore);
  console.log('The student has achieved grade: ' + studentGrade);
  














