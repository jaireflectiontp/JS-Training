function Output() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);

    var result;

    if (number1 > number2) {
        result = number1 + 'is greater than' + number2;
    }
    else if (number1 < number2) {
        result = number1 + 'is lesser than' + number2;
    }
    else if (number1 == number2) {
        result = 'Both are Equal';
    }
    else {
        result = " ";
    }
    document.getElementById('result').innerHTML = result;
}

function Reset() {
    var number1 = document.getElementById('num1').value = "";
    var number2 = document.getElementById('num2').value = "";

    var clear = "";

    document.getElementById('result').innerHTML = clear;
}

function Solution() {
    var number = parseInt(document.getElementById('num').value);

    var result;

    if (number > 0) {
        result = number + 'is a Positive Number';
    }
    else if (number < 0) {
        result = number + 'is a Negative Number';
    }
    else if (number == 0) {
        result = 'It is Zero';
    }
    else {
        result = " ";
    }
    document.getElementById('result-2').innerHTML = result;
}
function Reset() {
    var number = document.getElementById('num').value = "";

    var clear = "";

    document.getElementById('result-2').innerHTML = clear;
}

function conclusion() {
    var number = parseInt(document.getElementById('n').value);

    var result;

    if (number % 2 == 0) {
        result = number + 'is an Even Number';
    }
    else if (number % 3 == 0) {
        result = number +'is an Odd Number';
    }
    else {
        result = "";
    }
    document.getElementById('result-3').innerHTML = result;
}