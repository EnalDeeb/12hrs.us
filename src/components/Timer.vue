<template>
  <section class="red-background">
    <div class="container has-text-centered mycontainer">
      <span id="audio"></span>
      <section class="logo-section">
          <img
                  id="logo"
                  src="../assets/logo_index.png"
                  @click="ringBell">
      </section>
      <!--  THE TIMER NUMBERS  -->
      <section class="timer-section">
        <div id="timer">
          <span id="minutes">{{ minutes }}</span>
          <span id="middle">:</span>
          <span id="seconds">{{ seconds }}</span>
        </div>
      </section>
      <!--  THE BUTTONS  -->
      <section class="button-section">
        <div id="buttons">
          <!--     Start TImer -->
          <button
              id="start"
              class="button is-dark"
              v-if="!timer"
              @click="startTimer">
            <font-awesome-icon icon="play" />
          </button>
          <!--     Pause Timer -->
          <button
              id="stop"
              class="button is-dark"
              v-if="timer"
              @click="stopTimer">
            <font-awesome-icon icon="pause" />
          </button>
          <!--     Restart Timer -->
          <button
              id="reset"
              class="button is-dark"
              v-if="resetButton"
              @click="resetTimer">
            <font-awesome-icon icon="undo" />
          </button>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import {Howl} from 'howler';
window.bell = new Howl({
  src: ['../boxing_bell.mp3']
});

export default {
  name: 'Timer',
  props: {
    msg: String
  },
  data: () => {
    return {
      timer: null,
      totalTime: (12 * 60),
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
        clearInterval(this.timer);
        window.bell.play();
      }
    },
    ringBell: function() {
      window.bell.play();
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
<style scoped lang="scss">
  .mycontainer {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-top: 5vh;
  }
  #logo {
    height: 20vh;
  }

  #timer {
    font-size: 26vw;
  }
  .timer-section {
    flex: 1;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  #buttons {
    height: 25vmin;
    display: flex;
    align-items: center;
  }
  #buttons button {
    margin: 0px 3px;
    font-size: 30px;
  }

  .button-section {
    display: flex;
    justify-content: center;
  }

  .red-background {
    background-color: red;
    color: #FFF;
  }
</style>
