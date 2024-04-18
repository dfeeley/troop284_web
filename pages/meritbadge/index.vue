<template>
  <div class="meritbadge__page">

    <div class="meritbadge__preamble">
      <SanityContent :blocks="verbiage.merit_badge_preamble"/>
    </div>

    <h3>List of Merit Badges</h3>
    <MeritBadgeList
        :badges="meritBadges"
    />

  </div>


</template>

<script>
import { mapState } from 'vuex'

export default {
  head: {
    titleTemplate: '%s - Merit Badge Library'
  },

  computed: {
    ...mapState('meritbadges', ['meritBadges']),
    ...mapState('verbiage', ['verbiage']),
  },
}
</script>

<style>
.meritbadge__page {
  padding: 0px 10px;
}

</style>
