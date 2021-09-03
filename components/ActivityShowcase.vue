<template>
  <div class="showcase__container">
    <h2>
      {{ showcase.name }}
    </h2>

    <div class="body__content">
      <SanityContent :blocks="showcase.body"/>
    </div>

    <SanityImageGallery 
      v-if="showcase.images"
      :images="showcase.images"
      :idx="idx"
    />

  </div>
</template>

<script>
export default {
  props: {
    showcase: {
      type: Object,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },

  },
}
</script>
