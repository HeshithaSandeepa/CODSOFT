let value = '0';
let resultValue;


function addNumber(digit) {
    if (!calculatorIsOn) return;

    if (value === '0') {
        value = ''; 
    }
    value = value + digit;
    document.getElementById("display").innerHTML = value;
}

function erase() {
    if (!calculatorIsOn) return;

    value = document.getElementById("display").innerHTML;
    erasedPre = value.slice(0, -1);
    if (erasedPre === '') {
        document.getElementById('display').innerHTML = '0';
    } else {
        document.getElementById('display').innerHTML = erasedPre;
    }
}

function result() {
    if (!calculatorIsOn) return;

    try {
        resultValue = eval(value);
        document.getElementById('display').innerHTML = resultValue;
    } catch (error) {
        document.getElementById('display').innerHTML = 'Error';
    }
}

function allClear() {
    if (!calculatorIsOn) return;

    value = '0';
    document.getElementById('display').innerHTML = value;
}

// turn on off calculator
let calculatorIsOn = true; 

function turnOn() {
    calculatorIsOn = true;
    document.querySelector('.display').classList.remove('off');
}

function turnOff() {
    calculatorIsOn = false;
    document.querySelector('.display').classList.add('off');
}

