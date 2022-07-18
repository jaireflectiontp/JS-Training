function addition() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);
    var sum = number1 + number2;
    document.getElementById('result').innerText = sum;
}
function substraction() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);
    var sub = number2 - number1;
    document.getElementById('result').innerText = sub;
}
function multiplication() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);
    var mul = number1 * number2;
    document.getElementById('result').innerText = mul;
}
function division() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);
    var div = number2 / number1;
    document.getElementById('result').innerText = div;
}
function remainder() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);
    var remain = number2 % number1;
    document.getElementById('result').innerText = remain;
}
function clear(){
    var number1 = (document.getElementById('num1').value);
    var number2 = (document.getElementById('num2').value);
    var clear = "-";
    document.getElementById("result").innertext = clear;
}