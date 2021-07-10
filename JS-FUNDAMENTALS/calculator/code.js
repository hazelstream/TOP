const numberArea = document.getElementById("numberthing");
let firstnum = "";
let secondnum = "";
let op = "";

    
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(a, b, op) {
    let num1 = Number(a);
    let num2 = Number(b);
    switch (op) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            if (b === 0) return null;
            return divide(num1, num2);
        default:
            return null;
    }
}

function clickNumber(num) {
    numberArea.textContent += num;
    console.log(num);
}

function clickFunction(func) {
    if(op !== "") compute();
    firstnum = numberArea.textContent;
    numberArea.textContent = "";
    op = func;
}

function compute() {
    secondnum = numberArea.textContent
    numberArea.textContent = operate(firstnum, secondnum, op);
    op = "";
}

function deleteLast() {
    numberArea.textContent = numberArea.textContent.toString().slice(0, -1);
}

function clearscreen() {
    firstnum = "";
    secondnum = "";
    op = "";
    numberArea.textContent = "";
}