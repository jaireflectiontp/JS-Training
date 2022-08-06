class calculator {
    constructor(){
        this.name='calculate'
        alert(this.name);
    }
   addition=()=>{
        var num1= parseInt(document.getElementById('number1').value);
        var num2= parseInt(document.getElementById('number2').value);
        var add= num1+num2;
     document.getElementById('result').innerHTML=add;
    }
    
    substraction=()=>{
        var num1= parseInt(document.getElementById('number1').value);
        var num2= parseInt(document.getElementById('number2').value);
        var add= num1-num2;
        document.getElementById('result').innerHTML=add;
    }
    multiplication=()=>{
        var num1= parseInt(document.getElementById('number1').value);
        var num2= parseInt(document.getElementById('number2').value);
        var add= num1*num2;
        document.getElementById('result').innerHTML=add;
    }
}
let user = new calculator();
