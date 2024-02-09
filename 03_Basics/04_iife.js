/** Immediately Invoked Function Expressions (IIFE) **/


/** 1.Sometimes we might face problems from global scope variables .To make sure we don't face that type of problems we
 * use IIFE.
 * 2.we want just after defining the function we must run it.
 *
 * Basic Syntax of IIFE : ()(); -> first One is definition and second one is for execution.And if we donot put ';' it will create problem cause
 * it doesn't know where ti stop execution.
 * */

(function chai (){ //It is named IIFE
    console.log(`Databse Connected.`)
})();

((name) => { // it is unnamed IIFE
    console.log(`Database Connected By ${name}.`)
})("Deepon");
