const tinderUser = new Object() /**** this declaration makes the singleton object *****/
const facebookUser = {} /***  this is non-singleton object****/

facebookUser.id = "123"
facebookUser.name = "Deepon Das"
facebookUser.isLoggedIn = false

/** console.log(facebookUser) */


const regulerUser = {
    email:"deepon@karate.com",
    fullName: {
        userFullName : {
        firstName: "Deepon",
        lastName: "Das"
        }
    },
}

console.log(regulerUser.fullName?.userFullName) /** Here the ? gives us a protection in case fullName doesn't exist so to avoid using if else */

const obj1 = {1:"A",2:"B"}
const obj2 = {3:"C",4:"D"}

const obj3  = {obj1,obj2} //This will create objects inside object
const obj4 = Object.assign({},obj1,obj2) /** This is good for practise. Here {} it act as Target and obj1,obj2 act as a source.*/
// console.log(obj3)
// console.log(obj4)

const obj5 = {...obj1,...obj2} //<-- this is spread method

const users = [
    {
        id : 1,
        email : "Deepon@gmail.com"
    },
    {
        id : 2,
        email : "Debangana@gmail.com"
    },
    {
        id : 3,
        email : "provat@gmail.com"
    },
    {
        id : 4,
        email : "rumpa@gmail.com"
    }
]

users[1].email

// console.log(facebookUser)
// console.log(Object.keys(facebookUser)) /** Remind It : The result of this is an array of all keys. */
// console.log(Object.values(facebookUser))/** Remind It : The result of this is an array of all values. */
// console.log(Object.entries(facebookUser)) /** It will return Array of array where in each element is 1.key and 2.pair mkes*/
// console.log(facebookUser.hasOwnProperty('isLoggedIn'))


/**************************************************************************************************/
/** Object Destructureing */

const course = {
    courseName : "js in hindi",
    price : 999,
    courseInstructor : "hitesh"
}

// const {courseInstructor} = course
// console.log(courseInstructor)

const {courseInstructor:instructor} = course
console.log(instructor)
