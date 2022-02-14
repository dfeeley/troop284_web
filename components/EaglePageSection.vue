<template>
  <div class="section__container">
    <div :id="section.slug.current" class="section__body">
      <div v-if="section.heading" class="section__body__heading">
        <h3>
          {{ section.heading }}
        </h3>
      </div>
      <div v-if="section.body" class="section__body__body">
        <SanityContent :blocks="section.body"/>
      </div>
    </div>

    <div v-if="section.components" class="section__components container">
      <component 
        :is="component"
        v-for="component in section.components" 
        :key="component"
      />
    </div>

  </div>
</template>

<script>
export default {
  name: 'EaglePageSection',

  props: {
    section: {
      type: Object,
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

<style scoped>
.section__container {
  margin-bottom: 20px;
}

.section__body {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 10px 10px;
  margin: 10px auto;
}

.section__body__heading {
  align-self: start;
}

.section__body__heading h1 {
  margin-top: 0px;
}

.section__body__body {
  font-size: 20px;
  line-height: 31px;
  font-family: "Open Sans";
  padding-top: 10px;
}

.section__components {
  margin-bottom: 30px;
} 

</style>
