<template>
  <img 
    :src="imageUrl" 
    :alt="altFromImage || alt" 
    :width="width"
    :height="height"
    @click="$emit('click')" 
  />
</template>

<script>
/* eslint-disable vue/require-default-prop */
import SanityService from '~/services/sanity.service.js'

export default {
  props: {
    image: {
      type: Object,
      required: true
    },
    alt: {
      type: String,
      default: 'Missing alternative text'
    },
    width: Number,
    height: Number,
    cdnWidth: Number,
    cdnHeight: Number,
    auto: {
      default: 'format',
      type: String
    },
    fit: {
      default: 'max',
      type: String
    }
  },

  computed: {
    altFromImage() {
      return this.image.alt
    },

    imageUrl() {
      return SanityService.imageUrl(this.image, this.cdnWidth, this.cdnHeight, this.auto, this.fit)
    }
  }
}
</script>
