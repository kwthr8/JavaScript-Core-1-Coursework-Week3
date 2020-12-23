/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

function longNameThatStartsWithA(name) {
  return name.startsWith("A") && name.length > 7;
}

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];
var longName = names.find(longNameThatStartsWithA);

console.log(longName);

/* EXPECTED OUTPUT */
// "Alexandra"
