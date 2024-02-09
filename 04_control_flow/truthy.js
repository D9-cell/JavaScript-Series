let score = 200

if(score > 100) console.log("Test."),console.log("Test 2."); /** It is also possible. Mind It. */

/** falsy Values
 *      false , 0 , -0 , BigInt -> 0n , "" , null , undefined , NaN
 */
/** Truthy Values :-
 *      "0" , 'false' , " " , [] , {} , function(){} and all those which is not falsy value
 */

const userEmail = []
if(userEmail.length === 0){
    console.log("Array is Empty.")
}

const emptyObject = {}
if(Object.keys(emptyObject).length == 0){ /** Object.keys(emptyObject) this will return an array**/

}

/**
 * false == 0  --> true
 * false == '' --> true
 * 0 == ''     --> true
 */

/** Nullish Coalescing Operator (??) : worked on null, undefined */
let val1;
val1 = 5 ?? 10 /* val will return 5*/
val1 = null ?? 10 /* return 10 */
val1 = undefined ?? 30 /* return 30 */
val1 = null ?? 10 ?? 20 /* return 10 */

/** Terniary Operator
condition ? true : false ;
 */
let iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less Than 80.") : console.log("More Than 80.");