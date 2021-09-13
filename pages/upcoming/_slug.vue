<template>
  <div v-if="activity" class="container">

    <h2>{{ activity.name }}</h2>

    <MySanityImage
      :image="activity.image"
      :class="`img__size__${$vuetify.breakpoint.name}`"
    />

    <SanityContent :blocks="activity.body" class="body__content"/>

    <MapDisplay
      v-if="activity.location"
      title="Location"
      :lat="activity.location.lat"
      :long="activity.location.lng"
    />
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters('activities', ['upcomingForSlug']),

    activity() {
      return this.upcomingForSlug(this.$route.params.slug)
    },

  }
}
</script>
