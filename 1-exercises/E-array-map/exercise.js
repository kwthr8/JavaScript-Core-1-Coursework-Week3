// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

function multiplyBy100(number) {
    return number * 100;
}

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

console.log("Passing function name:");
var multiples = numbers.map(multiplyBy100);

console.log(multiples);

console.log("Inline function declaration:");
multiples = numbers.map(function multiply(number) {
    return number * 100;
});

console.log(multiples);

console.log("Arrow function:");
multiples = numbers.map(number => {
    return number * 100;
});

console.log(multiples);

console.log("Arrow function implicit return:");
multiples = numbers.map(number => number * 100);
console.log(multiples);