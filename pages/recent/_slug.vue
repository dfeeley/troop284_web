<template>
  <div v-if="activity" class="container">

    <h2>{{ activity.name }}</h2>
    <h3 v-if="activity.subtitle">{{ activity.subtitle }}</h3>

    <MySanityImage
      :image="activity.image"
      :class="`img__size__${$vuetify.breakpoint.name}`"
    />

    <SanityContent :blocks="activity.body" class="body__content"/>

    <SanityImageGallery
      v-if="activity.otherimages"
      title="Image Gallery"
      :album="activity.photoalbum"
      :images="activity.otherimages"
      :idx="1"
    />

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
    ...mapGetters('activities', ['recentForSlug']),

    activity() {
      return this.recentForSlug(this.$route.params.slug)
    },

  }
}
</script>
