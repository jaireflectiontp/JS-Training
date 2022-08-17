var milisecond = 0;
var second = 0;
var minute = 0;
var hour = 0;
var clock = startOver()

function play() {
    clock = startOver()
}

 function startOver(){
    return setInterval(function () {
        milisecond++;
        if (milisecond == 60) {
            second++;
            milisecond = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
        document.getElementById('mili').innerHTML = milisecond;
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
    }, 10)
 }

function pause() {
    clearInterval(clock);
}

           
           
            