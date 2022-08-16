var second=0;
var minute=0;
var hour=0;
setInterval (function(){
second++;
if(second==60){
    minute++;
    second=0;
}
if(minute==60){
    hour++;
    minute=0;
}
document.getElementById('sec').innerHTML=second
document.getElementById('min').innerHTML=minute
document.getElementById('hr').innerHTML=hour
},1000)