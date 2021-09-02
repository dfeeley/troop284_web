<template>
  <div :style="style" class="large-image">

  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      requird: false,
      default: 400
    },
  },

  computed: {
    backgroundImage() {
      return `url(${this.imageUrl})`
    },

    style() {
      return {
        backgroundImage: this.backgroundImage,
        height: `${this.height}px`,
        minHeight: `${this.height}px`,
      }
    }

  },

  methods: {

  },
}
</script>

<style scoped>
.large-image {
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: cover;
}

</style>
