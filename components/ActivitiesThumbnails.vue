<template>
  <div>
    <div class="activities__thumbnails">
      <ActivityThumbnail
        v-for="activity in activities"
        :key="activity._id"
        :activity="activity"
        :activity-type="activityType"
        :show-name="true"
        :width="width"
        :height="height"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activities: {
      type: Array,
      required: true,
    },
    activityType: {
      type: String,
      required: true,
    },
  },

  computed: {
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
.activities__thumbnails {
  display: flex;
  flex-direction: columns;
  flex-wrap: wrap;
  padding: 10px 20px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
}

</style>
