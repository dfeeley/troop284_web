<template>
  <div>
    <EagleNavigationSideBar
      :sections="inflatedSections"
    ></EagleNavigationSideBar>

    <h1>{{ pageContent.heading }}</h1>
    </ul>
    <EaglePageSection
      v-for="section in pageContent.sections"
      :key="section._key"
      :section="sectionForId(section._ref)"
    />
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

<style>

</style>
