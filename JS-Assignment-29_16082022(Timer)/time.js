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
if(hour==24){
    hour=0;
}
if(second < 10){
    document.getElementById('sec').innerHTML = '0'+second; 
}
else{
    document.getElementById('sec').innerHTML = second; 
}
if(minute < 10){
    document.getElementById('min').innerHTML = '0'+minute; 
}
else{
    document.getElementById('min').innerHTML = minute;
}
if(hour < 10){
    document.getElementById('hr').innerHTML = '0'+hour;
}
else{
    document.getElementById('hr').innerHTML = hour; 
}
},1000)