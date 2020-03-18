// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
numbers.sort(function(a,b){
  return b-a;
});
console.log(numbers[0]);
// Find longest string in strings
var longest= strings.sort(function(a,b){
  return b.length -a.length
});
console.log(longest[0]);
// Find all the even numbers
let even=numbers.filter(value=>value%2==0);
console.log(even);
// Find all the odd numbers
let odd=numbers.filter(value=>value%2!=0);
console.log(odd);
// Find all the words that contain 'is' use string method 'includes'
let is=strings.map(value=>value.includes('is'));
console.log(is);
// Find all the words that contain 'is' use string method 'indexOf'
var res = strings.filter(elem => {
  return elem.indexOf('is');
});
console.log(res);
// Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.forEach(elem => { 
  if(elem%3 == 0) 
    console.log(elem +  " is divisible by three");
  else
    console.log(elem + " is not divisible by three");
});
//  Sort Array from smallest to largest
numbers.sort((a,b)=>a-b);
// Remove the last word in strings
strings.pop();
// Add a new word in the array
strings.push('hello');
// Remove the first word in the array
strings.shift();
// Place a new word at the start of the array use (upshift)
strings.unshift("this");
// Make a subset of numbers array [18,9,7,11]
numbers.slice(3,7);
// Make a subset of strings array ['a','collection']
strings.slice(2,4);
// Replace 12 & 18 with 1221 and 1881
numbers.splice(1,1,1221);
numbers.splice(3,1,1881);
// Replace words with string in strings array
strings.splice(5,1,'string');
// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
 for(let element in customers){
   console.log(`obj.${element[0]}`=='j');
 }
// Create new array with firstname and lastname
let arr=['Joe Blogs','John Smith','Dave Jones','Jack White'];
// Sort the array created above alphabetically
arr.sort();