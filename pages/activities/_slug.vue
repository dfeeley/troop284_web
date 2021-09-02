<template>
  <div v-if="activity">
    <h1>{{ activity.name }}</h1>
    <MySanityImage
      :image="activity.image"
      :width="600"
    />
    {{ activity.location }}
    <SanityContent :blocks="activity.body"/>

    <MapDisplay
      v-if="activity.location"
      :lat="activity.location.lat"
      :long="activity.location.lng"
    />

    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters('activities', ['activityForSlug']),

    activity() {
      return this.activityForSlug(this.$route.params.slug)
    },

  }
}
</script>

<style>

</style>
