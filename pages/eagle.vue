<template>
  <div class="eagle__container">
    <div class="eagle__sidebar">
      <MySanityImage
        :image="pageContent.badge"
        :width="160"
      />

      <EagleNavigationSideBar
        :sections="inflatedSections"
      ></EagleNavigationSideBar>
    
    </div>

    <div class="eagle__content">
      <h1>{{ pageContent.heading }}</h1>
      </ul>
      <EaglePageSection
        v-for="section in pageContent.sections"
        :key="section._key"
        :section="sectionForId(section._ref)"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  head: {
    titleTemplate: '%s - Home'
  },

  computed: {
    ...mapState('eagle', ['pageContent']),
    ...mapGetters('eagle', ['sectionForId']),

    inflatedSections() {
      return this.pageContent.sections.map(obj => this.sectionForId(obj._ref))
    },
  },
}
</script>

<style scoped>

.eagle__container {
  padding: 1em;
}

.eagle__sidebar {
  position: fixed;
  width: 200px;
}

.eagle__content {
  padding-left: 200px;
}

@media screen and (max-width: 560px) {
  .eagle__sidebar {
    position: relative;
  }

  .eagle__content {
    padding-left: 0px;
  }
}

</style>
