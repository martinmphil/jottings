<template>
  <div class="job-line">
    <div>
      <button v-on:click="$emit('remove', job.id)">
        X
      </button>
      {{ job.jobInfo }}
    </div>
    <div>
      <datepicker 
        class="datepicker"
        placeholder="Select date"
        v-bind:value="job.dateScheduled"
      ></datepicker>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  },
  props: {
    job: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.job-line {
  padding: 1em;
  margin: 1em 0;
  background-color: white;
  border: solid;
  border-color: black;
  border-radius: 0.5em;
}
button {
  margin-left: 1em;
  float: right;
}
.datepicker {
  display: flex;
  justify-content: center;
}
</style>
