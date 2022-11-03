const fruits = [
  {fruitName: "pear", weight: 178},
  {fruitName: "lemon", weight: 120},
  {fruitName: "apple", weight: 90},
  {fruitName: "mango", weight: 150},
];

// calculate average weight of fruits

const average = fruits.reduce((a, b) => {
  return (a + b.weight) / fruits.length;
}, 0);

//calculate  difference between weights and average 

for (i = 0; i < fruits.length; i++) {
  const diff = fruits[i].weight - average;
  fruits[i].differenceFromAverage = diff;
}

//use reduce to find the smallest difference
const smallestDifference = fruits.reduce((a, b) => {
  return  a.differenceFromAverage < b.differenceFromAverage 
          ? a 
          : b;
});

console.log(
  "average weight of fruit: " + 
   average.toFixed(3));
   
console.log(
  "Closest fruit to average weight: " + 
  smallestDifference.fruitName);
