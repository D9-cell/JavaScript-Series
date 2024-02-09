var c = 300
let a = 300
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log("c : ", c) // -> 30 ,Here local scope is changing the value of global scope that must not be,this is one of the reason we avoid "var"
console.log("a" , a) // 300

console.log(addOne(3))
function addOne(num){
    return num+1;
}


console.log(addTwo(9)) // -> give us error cause accessing 'addTwo' before initialization
const addTwo = function (num){
    return num + 2;
}




