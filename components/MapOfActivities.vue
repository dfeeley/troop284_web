<template>
  <div>
    <h3 v-if="title">{{ title }}</h3>
 
    <gmap-map
      :center="center"
      :zoom="8"
      style="width:100%;  height: 555px;">
      <gmap-marker
        v-for="(loc, index) in activityLocations"
        :key="index"
        :position="loc"
        :title="loc.label"
        :icon="icon"
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

    activityType: {
      type: String,
      required: false,
      default: "recent"
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
          lat: 38.5816,
          lng: -121.4944
        },

    };
  },

  computed: {
    activityLocations() {
      return this.activities
        .filter(obj => obj.location)
        .map(obj => {
          return {lat: obj.location.lat, lng: obj.location.lng, label: obj.name, slug: obj.slug}
        })
    },
    icon() {
      return this.activityType === 'recent' ?  "http://maps.google.com/mapfiles/ms/icons/red-dot.png" : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
  },
 
  methods: {
    handleClick(loc) {
      this.$router.push(`/${this.activityType}/${loc.slug.current}`)
    },
  }
};
</script>
