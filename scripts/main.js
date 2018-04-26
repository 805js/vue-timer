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
    timer: function() {
      var that = this;
      if(!this.isRunning) {
        that.intervalId = setInterval(function() {
          that.time++;
          var min = Math.floor(that.time/100/60),
            sec = Math.floor(that.time/100),
            milliSec = that.time % 100;

          if(min < 10) {
            min = "0" + min;
          }
          if(sec >= 60) {
            sec = sec % 60;
          }
          if(sec < 10) {
            sec = "0" + sec;
          }
          that.timeLabel = min + ":" + sec + ":" + milliSec;
        }, 10);
      }
    }
  }
});
