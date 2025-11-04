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
const buttons = Array.from(document.querySelectorAll(".number"));
const operators = Array.from(document.querySelectorAll(".op"));
const another = Array.from(document.querySelectorAll(".number"));





function first(){
for (const button of buttons){
    button.addEventListener("click", () => {
        display.textContent = button.innerText;
        const first = display.textContent;
        firstNumber = first;
        console.log(firstNumber)
    })}
}
first()


function second(){
for (const anot of another){
    anot.addEventListener("click", () => {
        display.textContent = anot.innerText;
        const second = display.textContent;
        secondNumber = second;
        console.log(secondNumber)
    })}
}


function forTheOperate(){
    for (const op of operators){
        op.addEventListener("click", () => {
            display.textContent = firstNumber;
            operator = op.innerText;
            console.log(operator)
            second();
        })
    }

   
}

forTheOperate();
