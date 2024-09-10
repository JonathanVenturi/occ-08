const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {

    const result = eval(display.value);

    if(result == 'Infinity') {
        display.value = 'Division by zero is not allowed';
    } else {
        display.value = result;
    }

}