let stopWatch = {
    timeDisplay : null, //html time display
    resetButton : null, // html reset button
    startStop : null, //html start-stop button
    timer : null, //timer object
    now : 0, //current elapsed time

    initialize : () => {
        //initialize the buttons
        stopWatch.timeDisplay = document.querySelector('.timerDisplay');
        stopWatch.resetButton = document.querySelector('.reset');
        stopWatch.startStop = document.querySelector('.start');


        stopWatch.resetButton.onclick = stopWatch.reset;
        stopWatch.startStop.onclick = stopWatch.start;
        stopWatch.resetButton.disabled = false;
        stopWatch.startStop.disabled = false;
    },

    start : () =>{
        stopWatch.timer = setInterval(stopWatch.tick, 1000);
        stopWatch.startStop.value = 'Stop';
        document.body.style.backgroundColor = 'lightgreen';
        stopWatch.startStop.onclick = stopWatch.stop;
    },

    stop : () => {
        clearInterval(stopWatch.timer);
        stopWatch.timer = null;
        stopWatch.startStop.value = 'Start';
        document.body.style.backgroundColor = 'salmon';
        stopWatch.startStop.onclick = stopWatch.start;
    },

    tick : () => {
        stopWatch.now++;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        let remain = stopWatch.now;
        hours = Math.floor(remain / 3600);
        remain -= hours * 3600;
        minutes = Math.floor(remain / 60);
        remain -= minutes * 60;
        seconds = remain;

        //update the display

        if (hours < 10){
            hours = '0' + hours;
        }

        if (minutes < 10){
            minutes = '0' + minutes;
        }

        if (seconds < 10){
            seconds = '0' + seconds;
        }

        stopWatch.timeDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
    },

    reset : () => {
        if (stopWatch.timer !=null){
            stopWatch.stop();
        }
        document.body.style.backgroundColor = 'grey'
        stopWatch.now = -1;
        stopWatch.tick();
    }
};

window.addEventListener('load', stopWatch.initialize);

