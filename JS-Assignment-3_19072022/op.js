function Greater() {
    var number1 = parseInt(document.getElementById('num1').value)
    var number2 = parseInt(document.getElementById('num2').value)

    var result = (number1 > number2) ? number1 +'is geater than'+ number2 : number2 +'is greater than'+ number1;
    
    document.getElementById('result').innerHTML = result;
}

function Lesser() {
    var number1 = parseInt(document.getElementById('num1').value)
    var number2 = parseInt(document.getElementById('num2').value)

    var result = (number1 < number2) ? number1 +'is less than'+ number2 : number2 +'is less than'+ number1;
    
    document.getElementById('result').innerHTML = result;
}

function Equals() {
    var number1 = parseInt(document.getElementById('num1').value)
    var number2 = parseInt(document.getElementById('num2').value)

    var result = (number1 == number2) ? 'Both Nos are Equal'  : 'Both Nos are Different';
    
    document.getElementById('result').innerHTML = result;
}

function NotEquals() {
    var number1 = parseInt(document.getElementById('num1').value)
    var number2 = parseInt(document.getElementById('num2').value)

    var result = (number1 != number2) ? 'Both Nos are not Equal'  : 'Both Nos are Same';
    
    document.getElementById('result').innerHTML = result;
}

function Reset() {
    var number1 = document.getElementById('num1').value=""
    var number2 = document.getElementById('num2').value=""

    var clear ="" ;
    
    document.getElementById('result').innerHTML = clear;
}