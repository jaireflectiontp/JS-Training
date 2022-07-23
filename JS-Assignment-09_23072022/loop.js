//Program For 1 to 5 numbers
//While
var a = 1;
var num = '';
while (a <= 5) {
    num += '<span class="nums">' + a + '</span>';
    a++;
}
document.getElementById('num').innerHTML = num;

var b = 1;
var num = '';
do {
    num += '<span class="nums">' + b + '</span>';
    b++;
} while (b <= 5)
document.getElementById('numb').innerHTML = num;


var num = '';
for (var c = 1; c <= 5; c++) {
    num += '<span class="nums">' + c + '</span>';
}
document.getElementById('number').innerHTML = num;

//Program for Even & Odd Numbers
var d = 1;
var even = '';
var odd = '';
while (d <= 10) {
    if (d % 2 == 0) {
        even += '<span class="numseven"> ' + d + '</span>';
    }
    else {
        odd += '<span class="numsodd"> ' + d + '</span>';
    }
    d++;
}
document.getElementById('even').innerHTML = even;
document.getElementById('odd').innerHTML = odd;

j = 1;
var even = '';
var odd = '';
do {
    if (j % 2 == 0) {
        even += '<span class="numseven"> ' + j + '</span>';
    }
    else {
        odd += '<span class="numsodd"> ' + j + '</span>';
    }
    j++;
} while (j <= 10)
document.getElementById('evennum').innerHTML = even;
document.getElementById('oddnum').innerHTML = odd;

var even = '';
var odd = '';
for (var e = 1; e <= 10; e++) {
    if (e % 2 == 0) {
        even += '<span class="numseven"> ' + e + '</span>';
    }
    else {
        odd += '<span class="numsodd"> ' + e + '</span>';
    }
    d++;
}
document.getElementById('evenno').innerHTML = even;
document.getElementById('oddno').innerHTML = odd;

//Program to write name 5 times
var f = 1;
var identity = '';
while (f <= 5) {
    identity += '<li class="list nums">Jay</li>';
    f++;
}
document.getElementById('name').innerHTML = identity;

var j = 1;
var identity = '';
do {
    identity += '<li class="list nums">Jay</li>';
    j++;
} while (j <= 5)
document.getElementById('namedo').innerHTML = identity;

var identity = '';
for (g = 1; g <= 5; g++) {
    identity += '<li class=" list nums">Jay</li>';
}
document.getElementById('namefor').innerHTML = identity;




//Program for Prime Numbers
//while
var h = 1;
var prime = '';
var composite = '';
while (h <= 10) {
    if (h % h == 0) {
        prime += '<span class="numprime"> ' + h + '</span>';
    }
    else {
        composite += '<span class="numcomposite"> ' + h + '</span>';
    }
    h++;
}
document.getElementById('prime').innerHTML = prime;
document.getElementById('composite').innerHTML = composite;


//program to create table of 7 & 8

var n = 1;
var table6 = '';
while (n <= 10) {
    table6 += n * 6 + '<br>';
    n++;
}
document.getElementById('table6').innerHTML = table6;

var n = 1;
var table5 = '';
while (n <= 10) {
    table5 += n * 5 + '<br>';
    n++;
}
document.getElementById('table5').innerHTML = table5;

var n = 1;
var table3 = '';
do {
    table3 += n * 3 + '<br>';
    n++;
} while (n <= 10)
document.getElementById('table3').innerHTML = table3;

var n = 1;
var table2 = '';
do {
    table2 += n * 2 + '<br>';
    n++;
} while (n <= 10)
document.getElementById('table2').innerHTML = table2;

var table7 = '';
for (n = 1; n <= 10; n++) {
    table7 += n * 7 + '<br>';
}
document.getElementById('table7').innerHTML = table7;


var table8 = '';
for (n = 1; n <= 10; n++) {
    table8 += n * 8 + '<br>';
}
document.getElementById('table8').innerHTML = table8;

