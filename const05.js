// The const keyword was introduced in ES6 (2015).
// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
// Variables defined with const have Block Scope.

// Cannot be Reassigned
// A const variable cannot be reassigned:

// Example
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
console.log(PI);

// Must be Assigned
// JavaScript const variables must be assigned a value when they are declared:
// const PI = 3.14159265359;   // Correct

// const PI;
// PI = 3.14159265359;        // Incorrect