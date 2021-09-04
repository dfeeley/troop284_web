<template>
  <div class="activitythumbnail__container">
    <NuxtLink :to="`/recent/${activity.slug.current}`">
      <MySanityImage :image="activity.image" :width="250" :height="250" fit="scale"/>
      <div v-if="showName" class="activitythumbnail__title">
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
.activitythumbnail__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
  max-width: 250px;
  padding: 10px 10px;
}

.activitythumbnail__container img {
  border-radius: 60px;
}

.activitythumbnail__container a {
  text-decoration: none;
}

.activitythumbnail__title {
  color: var(--heading);
  font-weight: 700;
  text-align: center;
  font-size: 14px;
}

</style>
