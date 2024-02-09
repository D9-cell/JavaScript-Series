let myObject = {
    js : "javascript",
    cpp : "C++",
    ry : "Ruby",
    py : "Python"
}

for (let key in myObject) {
   // console.log(key , `:-` , myObject[key])
}

let myArr = ["js","cpp","ry","py"]
for (let key in myArr) {
   // console.log(key , `:-` ,myArr[key])
}

let books =[
    {
        name:"Book One",genre:"Fiction",year:"1989"
    },
    {
        name:"Book Two",genre:"History",year:"2001"
    },
    {
        name:"Book Three",genre:"History",year:"2002"
    },
    {
        name:"Book Four",genre:"Science",year:"2003"
    },
    {
        name:"Book Five",genre:"History",year:"2004"
    },
    {
        name:"Book Six",genre:"History",year:"2005"
    },
    {
        name:"Book Seven",genre:"Science",year:"2006"
    }
];

let requiredBooks = books.filter((book) => {
    return book.genre === "History"
})

let userBooks = books.filter((book) =>{
    return book.year > 2002;
})
console.log(userBooks)