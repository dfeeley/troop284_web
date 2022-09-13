<template>
  <div v-if="page" class="container">

    <h2>{{ page.heading }}</h2>

    <SanityContent :blocks="page.body" class="body__content"/>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters('knowledgeCenter', ['pageForSlug']),

    page() {
      return this.pageForSlug(this.$route.params.slug)
    },

  }
}
</script>
