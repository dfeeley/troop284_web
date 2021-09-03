<template>
  <div>
    <h1>Our Recent Pack Activities</h1>

    <ActivitiesCarousel :activities="activities"/>

    <div class="activity-container">
      <ActivityThumbnail
        v-for="activity in activities"
        :key="activity._id"
        :activity="activity"
      />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Activities',

  computed: {
    ...mapState('activities', ['activities']),

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
