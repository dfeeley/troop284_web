<template>
  <div class="container">
    <h2>Troop 284 Useful Links</h2>
    <div class="useful_links_content">

      <ul>
        <li v-for="bookmark in bookmarks" :key="bookmark._id">
          <a :href="bookmark.url" target="_blank" class="document">
            {{ bookmark.title }}
          </a>
        </li>
      </ul>

    </div>

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

    <h2>Knowledge Center Pages</h2>
    <ul>
      <li>
        <NuxtLink
          v-for="page in knowledgeCenterPages"
          :key="page._id"
          :to="`/knowledge/${page.slug.current}`"
          class="document"
        >{{ page.name }}
        </NuxtLink>
      </li>
    </ul>

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
    ...mapState('bookmarks', ['bookmarks']),
    ...mapState('knowledgeCenter', ['knowledgeCenterPages']),
  },
}
</script>

<style scoped>
h2 {
  padding-top: 30px;
}

.document_library {
  padding: 1em;
}
</style>
