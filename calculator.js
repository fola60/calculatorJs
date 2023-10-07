function addition(a,b){
    return a + b;
}

function subtraction(a,b){
    return a - b;
}

function multiplication(a,b){
    return a * b;
}

function division(a,b){
    return a / b ;
}


let firstNum = 0; 
let operator;
let secondNum = 0;

let str = '';








const clear = document.getElementById('btnC');
const nine = document.getElementById('btn9');
const eight = document.getElementById('btn8');
const seven = document.getElementById('btn7');
const six = document.getElementById('btn6');
const five = document.getElementById('btn5');
const four = document.getElementById('btn4');
const three = document.getElementById('btn3');
const two = document.getElementById('btn2');
const one = document.getElementById('btn1');
const addVal = document.getElementById('btn+');
const divVal = document.getElementById('btn/');
const multiplyVal = document.getElementById('btn*');
const subVal = document.getElementById('btn-');

const reversedString = str.split("").reverse().join("");

let numInputs = [];

screen = document.querySelector('.screen');
let pressCounter = 0;
one.addEventListener('click',function addOne(){
    

    screen.innerHTML = "";
    str = '1' + str;
    const reversedString = str.split("").reverse().join("");


    let numberBox = document.createElement('div');
    numberBox.classList.add("numBox");
    screen.appendChild(numberBox);
    numberBox.textContent = reversedString;

    
});

two.addEventListener('click',function addTwo(){
    screen.innerHTML = "";
    str = '2' + str;
    const reversedString = str.split("").reverse().join("");


    let numberBox = document.createElement('div');
    numberBox.classList.add("numBox");
    screen.appendChild(numberBox);
    numberBox.textContent = reversedString;


})

three.addEventListener('click',function addThree(){
    screen.innerHTML = "";
    str = '3' + str;
    const reversedString = str.split("").reverse().join("");


    let numberBox = document.createElement('div');
    numberBox.classList.add("numBox");
    screen.appendChild(numberBox);
    numberBox.textContent = reversedString;
})

four.addEventListener('click',function addFour(){
    screen.innerHTML = "";
    str = '4' + str;
    const reversedString = str.split("").reverse().join("");


    let numberBox = document.createElement('div');
    numberBox.classList.add("numBox");
    screen.appendChild(numberBox);
    numberBox.textContent = reversedString;

})

five.addEventListener('click',function addFive(){
    screen.innerHTML = "";
    str = '5' + str;
    const reversedString = str.split("").reverse().join("");


    let numberBox = document.createElement('div');
    numberBox.classList.add("numBox");
    screen.appendChild(numberBox);
    numberBox.textContent = reversedString;

})

six.addEventListener('click',function addSix(){
    screen.innerHTML = "";
    str = '6' + str;
    const reversedString = str.split("").reverse().join("");


    let numberBox = document.createElement('div');
    numberBox.classList.add("numBox");
    screen.appendChild(numberBox);
    numberBox.textContent = reversedString;

})

seven.addEventListener('click',function addSeven(){
    screen.innerHTML = "";
    str = '7' + str;
    const reversedString = str.split("").reverse().join("");


    let numberBox = document.createElement('div');
    numberBox.classList.add("numBox");
    screen.appendChild(numberBox);
    numberBox.textContent = reversedString;

})

eight.addEventListener('click',function addEight(){
    screen.innerHTML = "";
    str = '8' + str;
    const reversedString = str.split("").reverse().join("");


    let numberBox = document.createElement('div');
    numberBox.classList.add("numBox");
    screen.appendChild(numberBox);
    numberBox.textContent = reversedString;
    
})

nine.addEventListener('click',function addNine(){
    screen.innerHTML = "";
    str = '9' + str;
    const reversedString = str.split("").reverse().join("");


    let numberBox = document.createElement('div');
    numberBox.classList.add("numBox");
    screen.appendChild(numberBox);
    numberBox.textContent = reversedString;
   
    const removeNonInt = reversedString.replace(/\D/g, '')
    const inputValue = (+removeNonInt);
    numInputs.push(inputValue);
    console.log(inputValue);
})

addVal.addEventListener('click',function addValue(){
    screen.innerHTML = "";
    str = '+' + str;
    const reversedString = str.split("").reverse().join("");


    let numberBox = document.createElement('div');
    numberBox.classList.add("numBox");
    screen.appendChild(numberBox);
    numberBox.textContent = reversedString;
   
    let newStr = str;
    let newReversedString = newStr.split("").reverse().join("");

    const removeNonInt = newReversedString.replace(/\D/g, '')
    let inputValue = (+removeNonInt);
    numInputs.push(inputValue);
    console.log(numInputs);
    newStr = '';
})


subVal.addEventListener('click',function subValue(){
    screen.innerHTML = "";
    str = '-' + str;

    const reversedString = str.split("").reverse().join("");


    let numberBox = document.createElement('div');
    numberBox.classList.add("numBox");
    screen.appendChild(numberBox);
    numberBox.textContent = reversedString;
   

})


divVal.addEventListener('click',function divValue(){
    screen.innerHTML = "";
    str = '/' + str;

    const reversedString = str.split("").reverse().join("");


    let numberBox = document.createElement('div');
    numberBox.classList.add("numBox");
    screen.appendChild(numberBox);
    numberBox.textContent = reversedString;
   

})


multiplyVal.addEventListener('click',function multiplyValue(){
    screen.innerHTML = "";
    str = '*' + str;

    const reversedString = str.split("").reverse().join("");


    let numberBox = document.createElement('div');
    numberBox.classList.add("numBox");
    screen.appendChild(numberBox);
    numberBox.textContent = reversedString;
   

})