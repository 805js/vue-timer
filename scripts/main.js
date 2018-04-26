var isRunning = false,
  time = 0;

function start() {
  isRunning = start;
  timer();
}

function stop() {
  isRunning = false;
}

function reset() {
  isRunning = false;
  time = 0;
  document.getElementById('timerLabel').innerHTML = '00:00:00';
}

function timer() {
  if(isRunning) {
    setTimeout(function() {
      time++;
      var min = Math.floor(time/100/60),
        sec = Math.floor(time/100),
        milliSec = time % 100;

      if(min < 10) {
        min = "0" + min;
      }
      if(sec >= 60) {
        sec = sec % 60;
      }
      if(sec < 10) {
        sec = "0" + sec;
      }
      timer();
      document.getElementById('timerLabel').innerHTML = min + ":" + sec + ":" + milliSec;
    }, 10);
  }
}

Vue.component('start-button', {
  props: ['name'],
  methods: {
    start: function() {
      start();
    },
  },
  template: `<button v-on:click="start">{{ name }}</button>`
});

Vue.component('stop-button', {
  props: ['name'],
  methods: {
    stop: function() {
      stop();
    },
  },
  template: `<button v-on:click="stop">{{ name }}</button>`
});

Vue.component('reset-button', {
  props: ['name'],
  methods: {
    reset: function() {
      reset();
    },
  },
  template: `<button v-on:click="reset">{{ name }}</button>`
});

Vue.component('lap-button', {
  props: ['name'],
  methods: {
    lap: function() {
      console.log('lap');
    },
  },
  template: `<button v-on:click="lap">{{ name }}</button>`
});

let app = new Vue({
  el: '#app',
  data: {
    message: 'Stop Watch'
  }
});
