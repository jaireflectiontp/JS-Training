var milisecond = 0;
var second = 0;
var minute = 0;
var hour = 0;

function start() {
    timer = true
    startOver()
}
function reset() {
    timer = false;
    milisecond = 0;
    second = 0;
    minute = 0;
    hour = 0;
    document.getElementById('mili').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('hr').innerHTML = '00';
    document.getElementById('btn').innerText = 'START';
}
function stop() {
    timer = false;
    document.getElementById('btn').innerText = 'RESUME';
    console.log('btn')
}
function resume() {
    timer = true
}

function startOver() {
    if (timer) {
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

        let mili = milisecond;
        let sec = second;
        let min = minute;
        let hr = hour;

        document.getElementById('mili').innerHTML = mili;
        if (second < 10) {
            document.getElementById('sec').innerHTML = '0' + sec;
        }
        else {
            document.getElementById('sec').innerHTML = sec;
        }
        if (minute < 10) {
            document.getElementById('min').innerHTML = '0' + min;
        }
        else {
            document.getElementById('min').innerHTML = min;
        }
        if (hour < 10) {
            document.getElementById('hr').innerHTML = '0' + hr;
        }
        setTimeout(startOver, 10)
    }
}





