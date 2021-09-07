<template>
  <div class="container">
    <div class="card-container">
      <ActivityCard
        v-for="activity in activities"
        :key="activity._id"
        :activity="activity"
        :show-body="false"
      />
    </div>
    <MapOfActivities :activities="activities"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState('activities', ['recent']),
  },
  methods: {

  },
}
</script>

<style>
.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 20px;
}

</style>
