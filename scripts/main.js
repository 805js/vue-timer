let app = new Vue({
  el: '#app',
  data: {
    message: 'Stop Watch',
    isRunning: false,
    time: 0,
    timeLabel: "00:00:00",
    intervalId: null
  },
  methods: {
    start: function() {
      this.timer();
      this.isRunning = true;
    },
    stop: function() {
      this.isRunning = false;
      clearInterval(this.intervalId);
    },
    reset: function() {
      this.isRunning = false;
      clearInterval(this.intervalId);
      this.time = 0;
      this.timeLabel = "00:00:00";
    },
    incrementTimer: function() {
        this.time++;
        var min = Math.floor(this.time/100/60),
          sec = Math.floor(this.time/100),
          milliSec = this.time % 100;

        if(min < 10) {
          min = "0" + min;
        }
        if(sec >= 60) {
          sec = sec % 60;
        }
        if(sec < 10) {
          sec = "0" + sec;
        }
        this.timeLabel = min + ":" + sec + ":" + milliSec;
    },
    timer: function() {
      if(!this.isRunning) {
        this.intervalId = setInterval(this.incrementTimer, 10);
      }
    }
  }
});
