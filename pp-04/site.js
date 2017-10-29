//  1. Correct the variable scope so that the console.log call
//  outputs the correct value for x (5) even after double(6) is
//  called:
var x;

function double(num) {
  x = num * 2;
  return x;
}

double(6);
x = 5;
console.log('The value of x is:', x, 'It should be 5.');
// Moved the variable declaration under the function call.
// Here, the variable is still hoisted to the stop so it is
// declared for the use in the function. It will get set
// to 12 after the function is called but set back to 5
// after the assignment of 5.

//  2. Rewrite the corrected JavaScript above as a self-executing
//  anonymous function that does not pollute the global
//  namespace (e.g., neither its variables nor the double
//  function can be accessed via the `window` global object,
//  like `window.x`):


//  3. Correct this function so that there is no i variable in
//  the global scope:

function arrayEach(array, func) {
  for (i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

arrayEach(['red','green','blue'], console.log);

console.log(i) // should be 'undefined', not 3

//  4. Explain why this function does not modify the global
//  variable x declared on line 5 above. Write your explanation
//  as JavaScript comments.

function addTwo(x) {
  x = x + 2;
  return x;
}

console.log(addTwo(4)); // 6
console.log(x); // should be 5 if you corrected the double() function above
