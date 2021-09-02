<template>
    <iframe 
      :width="width" 
      :height="height" 
      style="border:0" 
      loading="lazy" 
      allowfullscreen
      :src="iframeSrc"
    />
</template>

<script>
export default {
  name: 'MapDisplay',
  props: {
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required : true,
    },

    width: {
      type: Number,
      required: false,
      default: 600
    },
    height: {
      type: Number,
      required: false,
      default: 450
    },
  },

  computed: {
    iframeSrc() {
      return `https://www.google.com/maps/embed/v1/place?zoom=13&q=${this.lat},${this.long}&key=${process.env.GOOGLE_MAPS_APIKEY}`
    }
  }
}
</script>

<style>

</style>
