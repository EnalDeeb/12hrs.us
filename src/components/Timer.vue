<template>
  <section class="hero red-background is-fullheight is-bold">
    <div id="hero-body" class="hero-body">
      <div class="container has-text-centered">
        <span id="audio"></span>
        <img src="../assets/logo_index.png">
        <!--  THE TIMER NUMBERS  -->
        <div id="timer">
          <span id="minutes">{{ minutes }}</span>
          <span id="middle">:</span>
          <span id="seconds">{{ seconds }}</span>
        </div>
        <!--  THE BUTTONS  -->
        <div id="buttons">
          <!--     Start TImer -->
          <button
              id="start"
              class="button is-dark"
              v-if="!timer"
              @click="startTimer">
            <!--<i class="fas fa-play"></i>-->
            Start
          </button>
          <!--     Pause Timer -->
          <button
              id="stop"
              class="button is-dark"
              v-if="timer"
              @click="stopTimer">
            <!--<i class="fas fa-pause"></i>-->
            Pause
          </button>
          <!--     Restart Timer -->
          <button
              id="reset"
              class="button is-dark"
              v-if="resetButton"
              @click="resetTimer">
            <!--<i class="fas fa-undo"></i>-->
            Reset
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    msg: String
  },
  data: () => {
    return {
      timer: null,
      totalTime: (1),
      resetButton: false,
      title: "Let the countdown begin!!"
    }
  },
  // ========================
  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
      const context = new AudioContext();
      window.bell = new Howl({
        src: ['../assets/boxing_bell.mp3']
      });
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
    },
    resetTimer: function() {
      this.totalTime = (12 * 60);
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      if(this.totalTime > 0) {
        this.totalTime--;
      } else {
        // const audio = new Audio('../src/assets/Boxing_Bell.mp3');
        // audio.srcObject = stream;
        // audio.crossOrigin = 'anonymous';
        // audio.play();
        clearInterval(this.timer);
        // document.getElementById('audio').innerHTML += '<audio id="player" autoplay><source src="../assets/Boxing_Bell.wav"><source src="../assets/Boxing_Bell.mp3"></audio>';
        console.log(window.bell.play());
      }
    }
  },
  // ========================
  computed: {
    minutes: function () {
      return this.padTime(Math.floor(this.totalTime / 60));
    },
    seconds: function() {
      return this.padTime(this.totalTime % 60);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#timer {
  font-size: 400px;
  line-height: 1;
  margin-bottom: 40px;
}

button {
  margin: 0px 3px;
  font-size: 30px;
}

img {
  height: 300px;
}

.red-background {
  background-color: red;
  color: #FFF;
}
</style>
