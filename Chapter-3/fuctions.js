let num1 = 100;
let num2 = 100;

function sum(a, b) {
  let s = a + b;
  return s;
}

console.log("The sum of " + num1 + " and " + num2 + " is " + sum(num1, num2));

//arrow fuctions
let number1 = 56;
let number2 = 6;
const sub = (x, z) => {
  let w = x - z;
  return w;
};
let d = sub(number1, number2);
console.log(d);
