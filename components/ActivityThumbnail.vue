<template>
  <div class="activitythumbnail__container">
    <NuxtLink :to="`/${activityType}/${activity.slug.current}`">
      <MySanityImage :image="activity.image" :width="width" :height="height" :cdn-height="250" :cdn-width="250" fit="max"/>
      <div v-if="showName" class="activitythumbnail__title">
        <h4>{{ activity.name }}</h4>
        <h4>{{ activity.subtitle }}</h4>
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

    activityType: {
      type: String,
      required: false,
      default: 'recent',
    },

    showName: {
      type: Boolean,
      required: false,
      default: true,
    },

    width: {
      type: Number,
      required: false,
      default: 250,
    },

    height: {
      type: Number,
      required: false,
      default: 250,
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

.xactivitythumbnail__container img {
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

@media (max-width: 600px) {
  .activitythumbnail__title {
    font-size: 10px;
  }

  .activitythumbnail__container {
    max-width: 125px;
  }
}
</style>
