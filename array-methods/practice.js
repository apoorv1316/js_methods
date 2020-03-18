// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];

var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];

                                              // MAP
// 1. Make an array of numbers that are doubles of numbers array

const double=numbers.map(value=> value*2);
console.log(double);

// 2. Compute the squares of numbers array

const square=numbers.map(value =>value*value);
console.log(square);

//3.  Make the elements of cuts array in uppercase

const upperCase=cuts.map(element=>element.toUpperCase());
console.log(upperCase)

// 4. Find the length of pizzas element

const lengthElement=pizzas.map(value=>value.length);
console.log(lengthElement);

// 5. Print the pizzas element in reverse order

const reverseOrder=pizzas.map(str=>str.split("").reverse().join(""));
console.log(reverseOrder);

// 6. Print the first letter of every element of cut array

const first =cuts.map(value=>value[0]);
console.log(first);