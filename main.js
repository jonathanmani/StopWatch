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

    stop
};

window.addEventListener('load', stopWatch.initialize)

