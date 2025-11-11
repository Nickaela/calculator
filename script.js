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

let firstNumber = "";
let operator = "";
let secondNumber = "";


function operate(){
    if (operator === "+"){
       display.textContent = addNumbers(+firstNumber, +secondNumber);
    } else if (operator === "-"){
        display.textContent = subtractNumbers(+firstNumber, +secondNumber);
    } else if (operator === "X"){
        display.textContent = multiplyNumbers(+firstNumber, +secondNumber);
    } else {
        display.textContent = divideNumbers(+firstNumber, +secondNumber);
    }
 };


const display = document.querySelector(".inputDisplay");
const digits = document.querySelectorAll(".number");
const ope = document.querySelectorAll(".ope");
const result = document.querySelector(".equals");
const clear = document.querySelector(".clear");



clear.addEventListener("click", () => {
    display.textContent = "";
    operator = "";
    console.log(display.textContent)
    console.log(operator)
})

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        

        if (operator === "") {
            display.textContent += digit.innerText;

            firstNumber = display.textContent;
            console.log(firstNumber)
        } else {
            secondNumber = digit.innerText;
            display.textContent = secondNumber;
            console.log(secondNumber)
        }
    })
})

ope.forEach((op) => {
    op.addEventListener("click", () => {
        display.textContent = firstNumber;
        operator = op.innerText;
        console.log(operator);
    })
})

result.addEventListener("click", () => {
    operate();
})



