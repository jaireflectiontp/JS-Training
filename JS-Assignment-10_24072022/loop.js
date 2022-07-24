
var num = '';
var a = 10;
var b = 20
for (var i = 1; i < a; i++) {
    for (var j = 1; j < b; j++) {
        num += '#'
    }
    num += '<br/>'
}
document.getElementById('loop').innerHTML = num;


//Loop2
var num = '';
var a = 1;
for (var i = 10; i >= a; i--) {
    for (var j = 1; j <= i; j++) {
        num += '#'
    }
    num += '<br/>'
}
document.getElementById('loop2').innerHTML = num;


//Loop3
var num = '';
var a = 10;
for (var i = 1; i <= a; i++) {
    for (var j = 1; j <= i; j++) {
        num += '#'
    }
    num += '<br/>'
}
document.getElementById('loop3').innerHTML = num;

//Loop4
function change() {
    debugger
    var a = document.getElementById('one').value;
    var num = '';

    for (var i =1; i <= a; i++) {
        for (var j = 1; j <= a; j++) {
            num += '#'
        }
        num += '<br/>'
    }
    document.getElementById('loop4').innerHTML = num;
}