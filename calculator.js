let input = '';
let operation = [];
const display = document.querySelector('.display');
const digitButtons = document.querySelectorAll('.digit');
const functionButtons = document.querySelectorAll('.function');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');


digitButtons.forEach(button => {
    button.addEventListener('click', function() {
        input += button.value;
        display.innerText = input;
    });
});

functionButtons.forEach(button => {
    button.addEventListener('click', function() {
        operation.push(input);
        if (operation.length === 3) {
            input = operate(...operation);
            operation = [];
            operation.push(input);
        }
        operation.push(button.value);
        display.innerText = input;
        input = '';
    });
});

equalsButton.addEventListener('click', function() {
    if (operation.length != 2 || input === '') {
        alert('ERROR: Incomplete operation');
        clear();
        return;
    }
    operation.push(input);
    input = operate(...operation);
    display.innerText = input;
    operation = [];
});

clearButton.addEventListener('click', clear);

//clear
function clear() {
    display.innerText = '';
    input = '';
    operation = [];
}

//add function
function add(x, y) {
    return x + y;
}

//subtract function
function subtract(x, y) {
    return x - y;
}

//multiply function
function multiply(x, y) {
    return x * y;
}

//divide function
function divide(x, y) {
    if (y === 0) {
        alert('Please do not divide by zero');
        clear();
        return '';
    }
    return Math.round((x / y) * 100) / 100;
}

function operate(x, operator, y) { //have to change operator
    x = parseInt(x);
    y = parseInt(y);
    let answer;
    switch(operator) {
        case '+':
            answer = add(x, y);
            break;
        case '-':
            answer = subtract(x, y);
            break;
        case '*':
            answer = multiply(x, y);
            break;
        case '/':
            answer = divide(x, y);
            break;
    }
    if (answer == null) {
        answer = '';
    }
    return answer;
}