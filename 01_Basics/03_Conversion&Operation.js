
/*
let score = "33abc" */


/** In both ways we can write typeof */
/**
console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // Here the output is number, but it can not be a number it is not possible.
console.log(valueInNumber) // valueInNumber -> actually is NaN

let scoreNull = null
let valueInScoreNull = Number(scoreNull) // The type of this is Number and it actually stores 0
console.log(typeof scoreNull) // Object
console.log(typeof valueInScoreNull) // Number
console.log(valueInScoreNull) // 0

let scoreUndefined = undefined
let valueInScoreUndefined = Number(scoreUndefined) // The type of this is Number and it actually stores NaN
console.log(typeof scoreUndefined) // undefined
console.log(typeof valueInScoreUndefined) // Number
console.log(valueInScoreUndefined) // NaN

let scoreboolean = true
let valueInScoreBoolean = Number(scoreboolean) // The type of this is Number and it actually stores 1
console.log(typeof scoreboolean) // boolean
console.log(typeof valueInScoreBoolean) // Number
console.log(valueInScoreBoolean) // 1
*/

/**
 "333" -> 33
 "33ABc" -> NaN
 true -> 1 , false -> 0
 undefined -> NaN
 null -> 0

 */

/**
 1 -> true | 0 -> false
 "" -> false | "Deepon" -> true
*/
/******************************** Operations *********************************/

let value = 3
let negValue = -value
console.log(negValue)

/** below type codes are not appreciable in company */
console.log(1 + "2")    //12
console.log("1" + 2)    // 12
console.log("1" + 2 + 2)// 122
console.log(1 + 2 + "2")// 32


