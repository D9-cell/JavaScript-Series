let myNums = [1,2,3,4,5,6,7,8,9,10];

let myNewArray = myNums.map( (num) => { /** returns this [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
*/
    return (num + 10);
})

myNewArray = myNums
                    .map((num) => num * 12)
                    .map((num) => num + 3 )
                    .filter((num) => num >= 50)
console.log(myNewArray)