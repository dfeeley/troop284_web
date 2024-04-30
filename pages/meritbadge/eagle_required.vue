<template>
  <div class="meritbadge__page">

    <div class="meritbadge__preamble">
      <SanityContent :blocks="verbiage.merit_badge_eagle_preamble"/>
    </div>

    <h3>Eagle Required Merit Badges</h3>
    <MeritBadgeList
        :badges="eagleRequiredNoAlternates"
        :showFilter="false"
    />
    <div
      v-for="group in eagleRequiredAlternateGroups"
      :key="group[0].slug.current"
      class="meritbadge__alternates"
     >
      <span>Choose one of:</span>
      <MeritBadgeList
         :badges="group"
         :showFilter="false"
      />
    </div>

    <h3>Elective Merit Badges</h3>
    <MeritBadgeList
        :badges="notEagleRequired"
    />


  </div>


</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  head: {
    titleTemplate: '%s - Merit Badge Library'
  },

  computed: {
    ...mapState('meritbadges', ['meritBadges']),
    ...mapState('verbiage', ['verbiage']),
    ...mapGetters('meritbadges', ['eagleRequiredNoAlternates', 'eagleRequiredAlternateGroups', 'notEagleRequired'])
  },
}
</script>

<style>
.meritbadge__page {
  padding: 0px 10px;
}

.meritbadge__alternates > span {
  font-weight: bold;
  font-size: 1.2em;
}

</style>
