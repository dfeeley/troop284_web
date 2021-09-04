<template>
  <div class="container">

    <h2>Upcoming Activities</h2>

    <div
      v-for="activity in filteredActivities"
      :key="activity._id"
    >
      <UpcomingActivity
        :activity="activity"
      />
      <hr/>
    </div>


  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Upcoming',

  data () {
    return {

    }
  },

  computed: {
    ...mapState('activities', ['upcoming']),
    filteredActivities() {
      return this.upcoming.filter(obj => obj.date >= new Date().toISOString().substring(0, 10))
    }
  },

  methods: {

  },
}
</script>

<style>

</style>
