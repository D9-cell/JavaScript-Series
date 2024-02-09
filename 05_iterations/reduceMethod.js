let myNums = [1,2,3]
let myTotal = myNums.reduce(function (acc,cur){
    //console.log(`Accumulator : ${acc} & CurrentValue : ${cur}`)
    return acc + cur;
},0)

let allTotal = myNums.reduce( (acc,cur) => (acc+cur),0)
// console.log(myTotal)
// console.log(allTotal)

let shoppingCart = [
    {itemName : "JavaCourse",price:1999},
    {itemName : "JavaScriptCourse",price:2999},
    {itemName : "PythonCourse",price:3999},
    {itemName : "AndroidCourse",price:999},
    {itemName : "WebDevelopmentCourse",price:999},
]

let cartPrice = shoppingCart.reduce((acc,item) => (acc + item.price),0)
console.log(cartPrice)