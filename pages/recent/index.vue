<template>
  <div class="container">
    <h2>Recent Troop Activities</h2>

    <div class="recent__content">
      <SanityContent :blocks="verbiage.recent_preamble"/>
    </div>

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
    ...mapState('verbiage', ['verbiage']),
  },

}
</script>
