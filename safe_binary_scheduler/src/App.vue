<template>
  <div id="app">
    <img alt="Safe Binary logo" src="./assets/safelogo.svg">
    <h2 class="safe-binary-name">Safe Binary job scheduler</h2>
    <Scheduler />
    <br>
  </div>
</template>

<script>
import Scheduler from './components/Scheduler.vue'

export default {
  name: 'app',
  components: {
    Scheduler
  }
}
</script>

<style>
#app {
  font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.safe-binary-name {
  color: whitesmoke;
}
/* width & height includes padding + border for responsive web design */
* {
  box-sizing: border-box;
}
/* responsive web design */
@media only screen and (min-width: 40em) {
  /* For desktop: */
  #app {
    width: 30em;
    margin: auto;
  }
}
</style>
