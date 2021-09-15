<template>
  <div class="container">
    <h2>Upcoming Troop Activities</h2>

    <div class="upcoming__content">
      <SanityContent :blocks="verbiage.upcoming_preamble"/>
    </div>

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
    ...mapState('verbiage', ['verbiage']),
  },

}
</script>
