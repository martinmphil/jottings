<template>
  <div>
    <InputJobInfo
      v-model="newJobInfo"
      placeholder="Please add new jobs here."
      v-on:keydown.enter="addJobInfo"
    />
    <div v-if="jobs.length">
      <JobItem
        v-for="(job) in jobs"
        v-bind:job="job"
        v-bind:key="job.id"
        v-on:remove="removeJob"
      />
    </div>
    <p v-else>
      Please add jobs in the text field.
    </p>
  </div>
</template>

<script>
import InputJobInfo from './InputJobInfo.vue'
import JobItem from './JobItem.vue'

let nextJobIdNbr = 1

let date1 = new Date(new Date().setDate(new Date().getDate()+1))
let date2 = new Date(new Date().setDate(new Date().getDate()+2))
let date3 = new Date(new Date().setDate(new Date().getDate()+3))
let date4 = new Date(new Date().setDate(new Date().getDate()+4))

export default {
  components: {
    JobItem, InputJobInfo
  },
  name: 'Scheduler',
  data: function () {
    return {
      newJobInfo: '',
      jobs:[
        {
          jobInfo:'Fit HD Projector in Romiley Gym',
          id: nextJobIdNbr++,
          dateScheduled: date1
        },
        {
          jobInfo:'Install Bluetooth LE sensors to treadmills in Didsbury campus',
          id: nextJobIdNbr++,
          dateScheduled: date2
        },
        {
          jobInfo:'Upgrade network router in Urmston Leisure Centre',
          id: nextJobIdNbr++,
          dateScheduled: date3
        },
        {
          jobInfo:'Lighting and network cabling at Cottons Hotel Spa',
          id: nextJobIdNbr++,
          dateScheduled: date4
        },
      ]
    }
  },
  computed: {
    dateNow: function () {
      return new Date()
    }
  },
  methods: {
    addJobInfo () {
      let trimmedText = this.newJobInfo.trim()
      if (trimmedText) {
        this.jobs.unshift({
          id: nextJobIdNbr++,
          jobInfo: trimmedText,
          dateScheduled: ''
        })
        this.newJobInfo = ''
      }
    },
    removeJob (idToRemove) {
      this.jobs = this.jobs.filter(job => {
        return job.id !== idToRemove
      })
    }
  }
}
</script>

<style scoped>

</style>
