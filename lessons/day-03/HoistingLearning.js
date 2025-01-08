console.log(myVariable);
var myVariable = 1;

/**
 * Compile to
 * var myVariable;
 * console.log(myVariable); -> undefined
 * myVariable = 1; 
 */

/**
 * Hoisting (dâng lên): dâng lên cao nhất trong scope của nó
 * {}: scope/code block/code body
 * let/const: NO hoisting
 * var: hoisting, giá trị mặc định sẽ là undefined
 */