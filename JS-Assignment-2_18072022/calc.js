
function addition() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);
    var sum = number1 + number2;
    document.getElementById('result').innerHTML = sum;
}
function substraction() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);
    var sub = number2 - number1;
    document.getElementById('result').innerHTML = sub;
}
function multiplication() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);
    var mul = number1 * number2;
    document.getElementById('result').innerHTML = mul;
}
function division() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);
    var div = number2 / number1;
    document.getElementById('result').innerHTML = div;
}
function remainder() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);
    var remain = number2 % number1;
    document.getElementById('result').innerHTML = remain;
}
function reset() {
   document.getElementById('num1').value="";
   document.getElementById('num2').value="";
document.getElementById('result').innerHTML = "";
}