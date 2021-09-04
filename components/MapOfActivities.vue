<template>
  <div>
    <h3 v-if="title">{{ title }}</h3>
 
    <gmap-map
      :center="center"
      :zoom="8"
      style="width:100%;  height: 555px;">
      <gmap-marker
        v-for="(loc, index) in locations"
        :key="index"
        :position="loc"
        :title="loc.label"
        :label="{text: loc.label, color: '#3e4c21', fontSize: '18px'}"
        :animation="2"
        @click="handleClick(loc)"
      ></gmap-marker>
    </gmap-map>
 
  </div>
</template>
 
<script>
export default {
  name: "MapOfActivities",

  props: {
    activities: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },

  },

  data() {
    return {
      center: { 
          lat: 37.8886203,
          lng: -122.1342418,
        },

    };
  },

  computed: {
    locations() {
      return this.activities
        .filter(obj => obj.location)
        .map(obj => {
          return {lat: obj.location.lat, lng: obj.location.lng, label: obj.name, slug: obj.slug}
        })
    },
  },
 
  methods: {
    handleClick(loc) {
      this.$router.push(`/recent/${loc.slug.current}`)
    }
  }
};
</script>
