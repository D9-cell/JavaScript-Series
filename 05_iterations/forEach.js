let coding = ["Java","Ruby","Python","JavaScript","Cpp"]

/**********       iterating on Array         ***********/
coding.forEach(function (val){ // Call back function doesn't have a NAME. and this forEach loop returns nothing (undefined)
    console.log(val)
})

coding.forEach( (item) => {
    console.log(item);
})

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

coding.forEach((item,index,array) => {
    console.log(index , `-->` ,item , array);
})

let myCoding = [
    {
        languageName : "Java",
        fileName : "java"
    },
    {
        languageName : "JavaScript",
        fileName : "js"
    },
    {
        languageName : "Python",
        fileName : "py"
    }
]
/**********       iterating on Object         ***********/
myCoding.forEach((item) => {
    console.log(item.languageName)
})

/************      ************ */
const myNums = [1,2,3,4,5,6,7,8,9,10]
let newNums = myNums.filter((value) => value > 6)
let newNums2 = myNums.filter((num) => {
    return num > 7;
})
console.log(newNums)