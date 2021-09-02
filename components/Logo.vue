<template>
  <img src="/chopped.png" :height="logoHeight"/>
</template>

<script>
export default {
  data () {
    return {
      logoHeight: 120
    }
  },

  /* eslint nuxt/no-globals-in-created: "off" */
  /* eslint nuxt/no-env-in-hooks: "off" */
  created () {
    if (process.client) { 
      window.addEventListener('scroll', this.handleScroll);
    }
  },

  destroyed () {
    if (process.client) { 
      window.removeEventListener('scroll', this.handleScroll);
    }
  },

  methods: {
    handleScroll () {
      console.log(window.scrollY)
      this.logoHeight = window.scrollY === 0 ? 120 : 56
    }
  },
}
</script>
