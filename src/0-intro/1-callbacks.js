
// Example 1
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(5, 3, sum));

// Example 2
setTimeout(() => {
  console.log('Hello JavaScript')
}
  , 2000);

// ---
function grettings(name) {
  console.log(`Hello ${name}`);
}
setTimeout(grettings, 3000, 'Diego Requejo');
