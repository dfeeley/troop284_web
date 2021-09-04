<template>
  <div v-if="activity" class="container">

    <h3>{{ activity.name }}</h3>

    <MySanityImage
      :image="activity.image"
      :class="`img__size__${$vuetify.breakpoint.name}`"
    />

    <SanityContent :blocks="activity.body" class="body__content"/>

    <MapDisplay
      v-if="activity.location"
      title="Location"
      :lat="activity.location.lat"
      :long="activity.location.lng"
    />
    
  </div>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      required: true,
    },
  },
}
</script>
