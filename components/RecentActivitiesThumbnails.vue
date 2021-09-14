<template>
  <div>
    <div class="recentactivities__thumbnails">
      <ActivityThumbnail
        v-for="activity in recent"
        :key="activity._id"
        :activity="activity"
        :show-name="true"
        :width="width"
        :height="height"
      />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState('activities', ['recent']),

    width() {
      return this.$vuetify.breakpoint.smAndDown ? 125 : 250
    },

    height() {
      return this.$vuetify.breakpoint.smAndDown ? 125 : 250
    },

  },

  methods: {

  },
}
</script>

<style scoped>
.recentactivities__thumbnails {
  display: flex;
  flex-direction: columns;
  flex-wrap: wrap;
  padding: 10px 20px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
}

</style>
