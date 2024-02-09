function addTwoNumber(number1,number2){
    console.log(number1+number2);
}

function addTwoNumber(number1,number2){
    let result = number1 + number2;
    return result;
}

let firstNum = 3;
let secondNumber = 5;
const result = addTwoNumber(firstNum,secondNumber);
console.log(result)

function loginUserMessage(userName = "You"){
    if(!userName){
        console.log("Please Enter A username.")
        return
    }
    return `${userName} just logged In.`
}

console.log(loginUserMessage("Deepon"))

/** Special Note :
  "..." is known as both Spread Operator and rest operator.Based on the use case we called it spread or rest operator.
 */
function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(200,250,300,400)) // -> [ 300, 400 ] cause val1 = 200 and val2 = 250

const user = {
    username : "Deepon",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    username:"Deepon",
    price: 199
})

let myNewArr = [200,400,100,900]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArr))
console.log(returnSecondValue([200,400,800,900]))
