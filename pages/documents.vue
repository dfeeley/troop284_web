<template>
  <div class="document_library">
    <h2>Troop 284 Document Library</h2>
    <div class="document_library_content">

      <ul>
        <li v-for="link in documentLibraryLinks" :key="link._id">
          <a :href="link.url" target="_blank" class="document">
            {{ link.title }}
          </a>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head: {
    titleTemplate: '%s - Home'
  },

  computed: {
    ...mapState('documentLibrary', ['documentLibraryLinks']),
  },
}
</script>

<style scoped>
.document_library {
  padding: 1em;
}
</style>
