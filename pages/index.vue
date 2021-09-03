<template>
  <div>
    <FrontPageSection
      v-for="section in pageContent.sections"
      :key="section._key"
      :section="sectionForId(section._ref)"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('frontpage', ['pageContent']),
    ...mapGetters('frontpage', ['sectionForId']),
  },
}
</script>

<style>

</style>
