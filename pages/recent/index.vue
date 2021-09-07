<template>
  <div class="container">
    <h2>Our Recent Pack Activities</h2>

    <div class="activity-container">
      <ActivityThumbnail
        v-for="activity in recent"
        :key="activity._id"
        :activity="activity"
      />
    </div>

    <MapOfActivities
      :activities="recent"
      title="By Location"
    />

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Activities',

  computed: {
    ...mapState('activities', ['recent']),

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
