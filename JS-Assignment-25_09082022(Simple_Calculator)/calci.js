var result = '';
class calculator {
constructor() {
}
getnumber1(){
    return parseInt(document.getElementById('num1').value);
}
getnumber2(){
    return parseInt(document.getElementById('num2').value);    
}
calculate(number1, number2, operator){
    
    if (operator == '+') {
        result = (number1 + number2)
    }
    else if (operator == '-') { 
         result = number1 - number2
     }
     else if (operator == '*') {
         result = number1 * number2
     }
    else if (operator == '/') {
         result = number1 / number2
     }
     document.getElementById('result').innerHTML = result;
}
}
class solve extends calculator{
    constructor(){
        super();
    }
    addnew(){
        var numb1 = this.getnumber1(); 
        var numb2 = this.getnumber2();
        this.calculate(numb1,numb2, '+');
        
    }
    substractnew(){
        var numb1 = this.getnumber1(); 
        var numb2 = this.getnumber2();
        this.calculate(numb1,numb2, '-');
        
    }
    multiplynew(){
        var numb1 = this.getnumber1(); 
        var numb2 = this.getnumber2();
        this.calculate(numb1,numb2, '*');
        
    }
    dividenew(){
        var numb1 = this.getnumber1(); 
        var numb2 = this.getnumber2();
        this.calculate(numb1,numb2, '/');
        
    }
}
let output =new solve();
