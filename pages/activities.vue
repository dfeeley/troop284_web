<template>
  <div v-if="pageContent">

    <MySanityImage class="fullscreen" :image="pageContent.image" :cdn-width="1280" :width="$vuetify.breakpoint.width"/>

    <SanityContent :blocks="pageContent.intro" class="container body__content"/>

    <ActivityShowcase
      v-for="(section, idx) in pageContent.sections"
      :key="section._key"
      :idx="idx"
      :showcase="showcaseForId(section._ref)"
      class="container"
    />

  </div>
  <div v-else>
    Content not loaded
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import SanityService from '@/services/sanity.service'

export default {
  head: {
    titleTemplate: '%s - Activities'
  },

  computed: {
    ...mapState('activities', ['pageContent', 'showcases']),
    ...mapGetters('activities', ['showcaseForId']),
  },

  methods: {
    backgroundImage(image) {
      return {
        backgroundImage: `url(${SanityService.imageUrl(image)})`,
        backgroundSize: '100%',
      }
    }
  },
}
</script>

<style>
img.fullscreen {
  width: 100%;
  height: auto;
}
</style>
