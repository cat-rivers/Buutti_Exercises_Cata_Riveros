// Reduce
//https://coursework.vschool.io/array-reduce-exercises/

// 1)
 function numberOne () { function totalSum(arr) {
  return arr.reduce((a, b) => a + b);
}
console.log(totalSum([1, 2, 1, 3, 4]));
}

// 2)

function numberTwo  ()  {  function stringConcat(arr) {
  return arr.reduce((a, b) => a + b, "");
}

console.log(stringConcat([1, 2, 3]));
}

// 3)
var voters = [
  {name: "Bob", age: 30, voted: true},
  {name: "Jake", age: 32, voted: true},
  {name: "Kate", age: 25, voted: false},
  {name: "Sam", age: 20, voted: false},
  {name: "Phil", age: 21, voted: true},
  {name: "Ed", age: 55, voted: true},
  {name: "Tami", age: 54, voted: true},
  {name: "Mary", age: 31, voted: false},
  {name: "Becky", age: 43, voted: false},
  {name: "Joey", age: 41, voted: true},
  {name: "Jeff", age: 30, voted: true},
  {name: "Zack", age: 19, voted: false},
];



function numberThree() { function countVotes(array) {
    return array.reduce((count, {voted}) => voted? count +1 : count, 0)
  }

console.log(countVotes(voters));
}



// 4)

function numberFour () {
var wishlist = [
  {title: "Tesla Model S", price: 90000},
  {title: "4 carat diamond ring", price: 45000},
  {title: "Fancy hacky Sack", price: 5},
  {title: "Gold fidgit spinner", price: 2000},
  {title: "A second Tesla Model S", price: 90000},
];

function shoppingSpree(arr) {
  return arr.reduce((cost, {price}) => cost + price, 0)
}
console.log(shoppingSpree(wishlist))
}


// 5) flatten arrays
function numberFive (){
const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten(array){
    return array.reduce((flatArray , arr) => flatArray.concat(arr), [])
}

// const tesArr = arrays.flat() >-- this exists so not sure why the reduce..... 
console.log(flatten(arrays))
}

// 6) kesken 

const voterResults = (array) => {
  const youngVotes = array.reduce(
    (count, voter) =>
      voter.age < 26 && voter.voted === true ? count + 1 : count,
    0
  );

  const youngPeople = array.reduce(
    (count, voter) => (voter.age < 26 ? count + 1 : count),
    0
  );

  const numMidVotesPeople = array.reduce(
    (count, voter) =>
      voter.age > 25 && voter.age < 36 && voter.voted === true
        ? count + 1
        : count,
    0
  );
  const numMidPeople = array.reduce(
    (count, voter) => (voter.age > 25 && voter.age < 36 ? count + 1 : count),
    0
  );
  const numOldVotesPeople = array.reduce(
    (count, voter) =>
      voter.age > 35 && voter.voted === true ? count + 1 : count,
    0
  );
  const numOldPeople = array.reduce(
    (count, voter) => (voter.age > 35 ? count + 1 : count),
    0
  );

  return {
    NumYoungVotes: youngVotes,
    NumYoungPeople: youngPeople,
    NumMidVotes: numMidVotesPeople,
    NumMidPeople: numMidPeople,
    NumOldVotes: numOldVotesPeople,
    NumOldPeople: numOldPeople,
  };
};

console.log(voterResults(voters));


