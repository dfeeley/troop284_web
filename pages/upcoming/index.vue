<template>
  <div class="container">
    <h2>Our Upcoming Pack Activities</h2>

    <UpcomingActivitiesThumbnails/>

    <MapOfActivities
      :activities="upcoming"
      activity-type="upcoming"
      title="By Location"
    />

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  head: {
    titleTemplate: '%s - Upcoming'
  },

  computed: {
    ...mapState('activities', ['upcoming']),
  },

}
</script>
