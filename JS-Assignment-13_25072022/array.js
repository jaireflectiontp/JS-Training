//Array
var array = ['e','h','j','a','f','c','g','k'];
for (var i=0;i<array;i++)
array=array[i]
document.getElementById('array').innerHTML=array;

//Sort
var alphabets = ['e','h','j','a','f','c','g','k'];
alphabets.sort()
for (var i=0;i<alphabets;i++)
alphabets=alphabets[i]
document.getElementById('sort').innerHTML=alphabets;

//push
var char = ['e','h','j','a','f','c','g','i'];
char.push('b')
char.push('d')
char.push('k')
char.sort()
for (var i=0;i<char;i++)
char=char[i]
document.getElementById('push').innerHTML=char;

//pop
var char = ['e','h','j','a','f','c','g','i'];
char.pop('i')
for (var i=0;i<char;i++)
char=char[i]
document.getElementById('pop').innerHTML=char;

//unshift
var char = ['e','h','j','a','f','c','g','i'];
char.unshift('500')
for (var i=0;i<char;i++)
char=char[i]
document.getElementById('unshift').innerHTML=char;

//
var char = ['e','h','j','a','f','c','g','i'];
char.shift()
for (var i=0;i<char;i++)
char=char[i]
document.getElementById('shift').innerHTML=char;