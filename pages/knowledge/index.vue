<template>
  <div class="container">
    <h2>Knowledge Center Pages</h2>

    <ul>
      <li>
        <NuxtLink
          v-for="page in knowledgeCenterPages"
          :key="page._id"
<<<<<<< HEAD
          :to="`/knowledge/${page.slug}`"
=======
          :to="`/knowledge/${page.slug.current}`"
>>>>>>> Added knowledge index page to make sure we generate the various dynamic pages, and reverted nuxt.config generate: true setting
        >{{ page.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  head: {
    titleTemplate: '%s - Recent'
  },

  computed: {
    ...mapState('knowledgeCenter', ['knowledgeCenterPages']),
  },

}
</script>
