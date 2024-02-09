/** for of loop*/
let array = [1,2,3,4,5]
for(let i of array){
    //console.log(i)
}

let greetings = "Deepon Das"
for (let greeting of greetings) {
    //console.log(greeting)
}

/** Map */
let newMap = new Map()
newMap.set('IN',"India")
newMap.set('USA',"United States of America")
newMap.set('Fr',"France")

console.log(newMap) // This will print the map in the format of array in key value pair of each array

for (let [key,value] of newMap) {
    //console.log(key , `:-` , value)
}

let myObj = {
    'game1' : "NFS",
    'game2' : "GTA6"
}
for (let [key,value] of myObj) {
    console.log(key , `:-` , value) // -> this for of loop will not work on object iterations
}
