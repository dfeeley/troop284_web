<template>
  <div v-if="activity">

    <MySanityImage
      :image="activity.image"
      :width="$vuetify.breakpoint.width"
    />

    <div class="container">
      <h2>{{ activity.name }}</h2>

      <SanityContent :blocks="activity.body" class="body__content"/>

      <MapDisplay
        v-if="activity.location"
        :lat="activity.location.lat"
        :long="activity.location.lng"
      />
    </div>

    <SanityImageGallery
      v-if="activity.otherimages"
      :images="activity.otherimages"
      :idx="1"
    />
    </div>
    
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
