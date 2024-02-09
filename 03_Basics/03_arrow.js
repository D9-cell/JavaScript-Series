const user = {
    username:"Deepon",
    price : 199,

    welcomeMessage: function (){
        console.log(`${this.username}  welcome to website.`)
    }
}

user.welcomeMessage()
console.log(this)
// it will return an empty object ++++++ it is because it is running in Node and outside of a function ++++++++
// if it will run on Browser then it will show/return a Window object

function chai(){
    console.log(this) // -> it will return too many things as Microtask,and global values and etc.
}
chai()

const chai2 = () => {
    let userName = "Deepon"
    console.log(this) // return an empty object
}

//Below is Basic Arrow Function
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3,9))

const addTwo2 = (num1,num2) => (num1 + num2) /** This is Implicit return arrow function*/
console.log(addTwo2(3,9))

let retObject = (num1,num2) => ({username: "Deepon"})
console.log(retObject(3,9))