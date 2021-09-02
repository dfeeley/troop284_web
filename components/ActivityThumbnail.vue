<template>
  <div class="thumbnail-container">
    <NuxtLink :to="`/activities/${activity.slug.current}`">
      <MySanityImage :image="activity.image" :width="300" :height="300"/>
      <div v-if="showName" class="title">
        <h4>{{ activity.name }}</h4>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ActivityThumbnail',

  props: {
    activity: {
      type: Object,
      required: true,
    },

    showName: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  data () {
    return {

    }
  },
  methods: {

  },
}
</script>

<style scoped>
.thumbnail-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
