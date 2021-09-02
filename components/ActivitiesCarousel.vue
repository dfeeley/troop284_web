<template>
  <div>
    <v-carousel
      :interval="4000"
      cycle
      :height="480"
      :hide-delimiters="true"
      :hide-delimeter-background="true"
    >
      <v-carousel-item
        v-for="activity in activities"
        :key="activity._id"
        :to="`/activities/${activity.slug.current}`"
        nuxt
      >
        <div class="slide-container">
          <MySanityImage :image="activity.image" :width="1024" :height="480" fit="scale"/>
          <h3>{{ activity.name }}</h3>
        </div>
      </v-carousel-item>

    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'ActivitiesCarousel',

  props: {
    activities: {
      type: Array,
      required: true,
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

<style scoped >
.slide-container {
  display: grid;
  justify-content: center;
  align-items: center;
}
.slide-container > h3 {
  text-align: center;
  margin-top: -100px;
  color: white;
  font-size: 2em;
}

</style>
