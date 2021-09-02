<template>
  <div v-if="activity">
    <h1>{{ activity.name }}</h1>
    <img v-if="activity.image" :src="imageUrlFor(activity.image).width(640)" />
    <SanityContent :blocks="activity.body"/>
    <div v-if="activity.otherimages">
      <h3>Other Images</h3>
      <img
        v-for="img in activity.otherimages"
        :key="img._id"
        :src="imageUrlFor(img).width(240)"
      />
    </div>
  </div>
</template>

<script>
import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'

import imageUrlBuilder from "@sanity/image-url";
import sanity from "~/sanityClient.js"

const imageBuilder = imageUrlBuilder(sanity);

export default {
  name: 'Activity',

  components: {
    SanityContent,
  },

  props: {
    activity: {
      type: Object,
      required: true,
    },
  },

  data () {
    return {

    }
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
  },
}
</script>

<style>

</style>
