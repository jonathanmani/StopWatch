let stopWatch = {
    timeDisplay : null,
    reset : null,
    startStop : null,
    timer : null,
    now : 0,

    initialize : function(){
        //initialize the buttons
        this.timeDisplay = document.querySelector('.timerDisplay');
        this.reset = document.querySelector('.reset');
        this.startStop = document.querySelector('.start');


        this.reset.onclick = this.reset;
        this.startStop.onclick = this.startStop;
        this.reset.disabled = false;
        this.startStop.disabled = false;
    },

    start : function(){
        this.timer = setInterval(this.tick, 1000);
        this.startStop.value = 'Stop';
        this.startStop.onclick = this.stop;
    },

    stop : function(){
        clearInterval(this.timer);
        this.timer = null;
        this.startStop.value = 'Start';
        this.startStop.onclick = this.start;
    },

    tick : function(){
        this.now++;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        let remain = this.now;
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

        this.timeDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
    }
};

window.addEventListener('load', stopWatch.initialize)

