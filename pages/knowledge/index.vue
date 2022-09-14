<template>
  <div class="container">
    <h2>Knowledge Center Pages</h2>

    <ul>
      <li>
        <NuxtLink 
          v-for="page in knowledgeCenterPages" 
          :key="page._id"
          :to="`/knowledge/${page.slug}`"
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
