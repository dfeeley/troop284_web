<template>
  <ActivitiesThumbnails 
    :activities="recent"
    activity-type="recent"
  />
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('activities', ['recent']),
  },
}
</script>

<style>

</style>
