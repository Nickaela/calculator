function addNumbers(a, b){
    return a + b;
}

function subtractNumbers(a, b){
    return a - b;
}

function multiplyNumbers(a, b){
    return a * b;
}

function divideNumbers(a, b) {
    return a / b;
}

let firstNumber;
let operator = "/";
let secondNumber;


function operate(){
    if (operator === "+"){
       return display.textContent = (addNumbers(+firstNumber, +secondNumber));
    } else if (operator === "-"){
        return subtractNumbers(+firstNumber, +secondNumber);
    } else if (operator === "*"){
        return multiplyNumbers(+firstNumber, +secondNumber);
    } else {
        return divideNumbers(+firstNumber, +secondNumber);
    }
 };

const display = document.querySelector("p");

const button1 = document.querySelector(".num1")
const button2 = document.querySelector(".num2")
const addd = document.querySelector(".numAdd")
const result = document.querySelector(".numEquals");

function one() {
button1.addEventListener("click", () => {
    display.textContent = button1.innerText;
    const first = display.textContent;
    firstNumber = first;
    console.log(firstNumber);
})
}

one();

function add() {
    addd.addEventListener("click", () => {
        display.textContent = firstNumber;
        operator = addd.innerText;
        console.log(operator)
        second();
    })
}

add();

function second() {
    button2.addEventListener("click", () => {
    display.textContent = button2.innerText;
    const second = display.textContent;
    secondNumber = second;
    console.log(secondNumber);
})
}

function resultSum() {
    result.addEventListener("click", () => {
    display.textContent = button2.innerText;
    console.log(firstNumber)
    console.log(secondNumber)
    console.log(operator)
    console.log(operate());
})
}

resultSum();