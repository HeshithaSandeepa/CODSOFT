let value = '0';
let resultValue;

// add numbers to the disply
function addNumber(digit) {
    if (!calculatorIsOn) return;

    if (value === '0') {
        value = ''; 
    }
    value = value + digit;
    document.getElementById("display").innerHTML = value;
}

// erase display numbers one by one
function erase() {
    if (!calculatorIsOn) return;

    value = document.getElementById("display").innerHTML;

    erasedPre = value.slice(0, -1);
    if (erasedPre === '') {
        erasedPre = '0'; // Set to '0' if all characters are erased
    }
    value = erasedPre;
    document.getElementById('display').innerHTML = erasedPre;
}


// calculate results
function result() {
    if (!calculatorIsOn) return;

    try {
        resultValue = eval(value);
        document.getElementById('display').innerHTML = resultValue;
    } catch (error) {
        document.getElementById('display').innerHTML = 'Error';
    }
}

// clear all things in display
function allClear() {
    if (!calculatorIsOn) return;

    value = '0';
    document.getElementById('display').innerHTML = value;
}

// turn on off calculator
let calculatorIsOn = true; 

function turnOn() {
    calculatorIsOn = true;
    document.getElementById('display').innerHTML = 0;
    document.querySelector('.display').classList.remove('off');
}

function turnOff() {
    calculatorIsOn = false;
    document.getElementById('display').innerHTML = 0;
    document.querySelector('.display').classList.add('off');
}

