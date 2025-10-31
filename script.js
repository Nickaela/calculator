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

const firstNumber = 1;
const operator = "/";
const secondNumber = 1;


function operate(sign, one, two){
    if (sign === "+"){
        return addNumbers(one, two);
    } else if (sign === "-"){
        return subtractNumbers(one, two);
    } else if (sign === "*"){
        return multiplyNumbers(one, two);
    } else {
        return divideNumbers(one, two);
    }
 };


const display = document.querySelector("p");
const buttons = document.querySelectorAll("button")

function displayTheNums(){
    buttons.forEach((butt) => {
        butt.addEventListener("click", () => {

            if (!isNaN(butt.textContent)) {
            display.textContent = butt.textContent;
            } else {
                display.textContent = display.textContent;
            }
        });
    });
};

displayTheNums();


