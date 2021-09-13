<template>
  <div class="container">
    <h2>Our Upcoming Pack Activities</h2>

    <div class="activity-container">
      <ActivityThumbnail
        v-for="activity in upcoming"
        :key="activity._id"
        :activity="activity"
        activity-type="upcoming"
      />
    </div>

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
    ...mapState('activities', ['recent', 'upcoming']),

  },

}
</script>

<style scoped>
.activity-container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
  align-items: flex-start;
}

.activity-container > *:not(:first-child) {
  margin-left: 20px;
}

</style>
