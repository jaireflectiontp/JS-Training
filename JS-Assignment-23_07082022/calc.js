
var result = '';
var numb1 = document.getElementById('num1').value;
console.log(numb1)
var numb2 = document.getElementById('num2').value;
console.log(numb1)
class calculator {
constructor(number1, number2, operator) {
    this.number1 = number1;
    this.number2 = number2;
    this.operator = operator;
}
calculate(){
    if (this.operator == '+') {
        result = (this.number1 + this.number2)
    }
    else if (this.operator == '-') {
         result = this.number1 - this.number2
     }
     else if (this.operator == '*') {
         result = this.number1 * this.number2
     }
    else if (this.operator == '/') {
         result = this.number1 / this.number2
     }
     document.getElementById('result').innerHTML = result;
}
}

let add = new calculator (numb1, numb2, '+');
let substract = new calculator(numb1,numb2, '-');
let multiply = new calculator(numb1, numb2, '*');
let divide = new calculator(numb1, numb2, '/');
