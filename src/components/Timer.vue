<template>
  <section class="hero is-danger is-fullheight is-bold">
    <div id="hero-body" class="hero-body">
      <div class="container has-text-centered">
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
              class="button is-dark is-large"
              v-if="!timer"
              @click="startTimer">
            <i class="fas fa-play"></i>
          </button>
          <!--     Pause Timer -->
          <button
              id="stop"
              class="button is-dark is-large"
              v-if="timer"
              @click="stopTimer">
            <i class="fas fa-pause"></i>
          </button>
          <!--     Restart Timer -->
          <button
              id="reset"
              class="button is-dark is-large"
              v-if="resetButton"
              @click="resetTimer">
            <i class="fas fa-undo"></i>
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
      totalTime: (25 * 60),
      resetButton: false,
      title: "Let the countdown begin!!"
    }
  },
  // ========================
  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
    },
    resetTimer: function() {
      this.totalTime = (25 * 60);
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      this.totalTime--;
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
  font-size: 200px;
  line-height: 1;
  margin-bottom: 40px;
}
</style>
