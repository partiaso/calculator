
function add(a, b) {
    return a + b
}
console.log(add(20,10));

function subtract(a, b) {
    return a - b
}
console.log(subtract(20,10));

function multiply(a, b) {
    return a * b
}
console.log(multiply(20,10));

function divide(a, b) {
    return a / b
}
console.log(divide(20,10));




let firstNumber = Number;
let operator;
let secondNumber = Number;

function operate(oper, num1, num2) {
    if (oper == add) return add(num1, num2);
    else if (oper == subtract) return subtract(num1, num2);
    else if (oper == multiply) return multiply(num1, num2);
    else if (oper == divide)return divide(num1, num2);
}
console.log(operate(divide, 5, 2))

