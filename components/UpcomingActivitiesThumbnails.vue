<template>
  <ActivitiesThumbnails 
    :activities="upcoming"
    activity-type="upcoming"
  />
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('activities', ['upcoming']),
  },
}
</script>

<style>

</style>
