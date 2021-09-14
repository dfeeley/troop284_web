<template>
  <div class="container">
    <h2>Our Recent Pack Activities</h2>

    <RecentActivitiesThumbnails/>

    <MapOfActivities
      :activities="recent"
      activity-type="recent"
      title="By Location"
    />

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  head: {
    titleTemplate: '%s - Recent'
  },

  computed: {
    ...mapState('activities', ['recent']),

  },

}
</script>
