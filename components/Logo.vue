<template>
  <img src="/chopped.png" :height="logoHeight"/>
</template>

<script>
export default {
  props: {
    mobile: {
      type: Boolean,
      required: false,
      default: false
    },
  },

  data () {
    return {
      scrolled: false,
    }
  },

  computed: {
    logoHeight() {
      if(this.mobile || this.scrolled) {
        return 56 
      } else {
        return 120 
      }
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
      this.scrolled = window.scrollY > 0
    }
  },
}
</script>
