const timer=10;
let amountTime=timer*60;

function calculateTime(){
    const countdown = document.querySelector(".time-countdown");
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if(seconds<10){
        seconds = "0"+ seconds;
    }

    if(minutes<10){
        minutes="0"+ minutes;
    }

    countdown.textContent = `${minutes}:${seconds}`;
    amountTime--;

    if(amountTime<0){
        stopTimer();
        amountTime=0;
    }

    function stopTimer(){
        clearInterval(timerID);
    }
}

let timerID = setInterval(calculateTime, 1000);