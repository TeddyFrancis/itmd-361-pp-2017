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

(function(){
  var y;

  function double(num){
    y = num * 2;
    return y;
  }
  double(6);
  y = 5;
  console.log('The value of y is:', y, 'It should be 5.');
})();

console.log(window.y);

// The window.y displays undefined when it is called. This is because
// y is defined in the self executing function and not in the global
// scope. For some reason, the lint file give an error saying that
// the double function in line 29 is declared but not used when it
// is clearly called in line 33. I think this has to do with the file
// because during the first part, I had no errors from the linter when
// done but now I do.

// ***New commit***
// Error found, typo in function(). The word double was spelled
// incorrectly at declaration.


//  3. Correct this function so that there is no i variable in
//  the global scope:

function arrayEach(array, func) {

  var i;

  for (i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

arrayEach(['red', 'green', 'blue'], console.log);

// console.log(i); // should be 'undefined', not 3

// Getting error in output for i being undefined. Moved declaration of
// i inside the function before the for loop creating it to be undefined
// at the global scale.
// Commented out the console.log(i) so that the rest of the file can run
// for the purpose of working on number 4 in pp-04.

//  4. Explain why this function does not modify the global
//  variable x declared on line 5 above. Write your explanation
//  as JavaScript comments.

function addTwo(x) {
  x = x + 2;
  return x;
}

console.log(addTwo(4)); // 6
console.log(x); // should be 5 if you corrected the double() function above
