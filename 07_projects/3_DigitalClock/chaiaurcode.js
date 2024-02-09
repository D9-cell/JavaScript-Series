const clock = document.getElementById('clock')

let date = new Date()

//Strictly follow the below code pattern
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
} , 1000)