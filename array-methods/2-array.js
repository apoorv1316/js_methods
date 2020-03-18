var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.

const findLongestWord=words.reduce(function(a,b){
  return a.length > b.length ? a:b ;});
console.log(findLongestWord);

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
let sumArray= numbers1.reduce((acc,val)=>acc+val);
let avg=sumArray/numbers1.length
console.log(sumArray);
console.log(avg);


var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
const averageNumbers=numbers2.reduce((a,b)=>a+b)/numbers2.length;
console.log(averageNumbers);

var words2 = [
  'seat',
  'correspond',
  'linen',

  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let arr=[]
for(words of words2){
  arr.push(words.length);
}
console.log(arr);
const averageNumbers=arr.reduce((a,b)=>a+b)/arr.length;
console.log(averageNumbers);
