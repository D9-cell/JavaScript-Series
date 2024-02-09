const form = document.querySelector('form')
/* let height = parseInt(document.querySelector('#height').value)
    if we write this here whenever the page is loaded,the js will load and return us the empty value of height/weight immidiately
*/

form.addEventListener('submit',function(e){
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let results = (document.querySelector('#results'))

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }else{
        let bmi = (weight / ((height*height)/10000)).toFixed(2)
        //Show the result
        results.innerHTML = `<span>${bmi}</span>`
    }
})