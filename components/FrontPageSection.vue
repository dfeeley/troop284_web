<template>
  <div class="section__container">

    <div v-if="section.image" class="section__image__container">
      <MySanityImage
        :image="section.image"
        :width="$vuetify.breakpoint.width"
        class="section__image__image"
      />
      <div v-if="section.imageQuote" class="section__image__quoteoverlay">
        <SanityContent :blocks="section.imageQuote"/>
      </div>
    </div>

    <div class="section__body">
      <div v-if="section.headingImage" class="section__body__image">
        <MySanityImage 
          :image="section.headingImage"
          :width="200"
        />
      </div>
      <div v-if="section.heading" class="section__body__heading">
        <h2>
          {{ section.heading }}
        </h2>
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
  name: 'FrontPageSection',

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

<style>
.section__container {
  margin-bottom: 20px;
}

.section__image__container {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
}

.section__image__image {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}


.section__image__quoteoverlay {
  background-color: transparent;
  text-align: center;
  color: var(--quoteOverlay);
  font-weight: 700;
  font-size: 32px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  align-self: start;
  padding: 40px 20px;
}

.section__body {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  max-width: 75%;
  margin: 30px auto;
}

.section__body__image {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}

.section__body__heading {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  align-self: start;
}

.section__body__body {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  font-size: 20px;
  line-height: 31px;
  font-family: "Open Sans";
}

.section__components {
  margin-bottom: 30px;
} 


</style>
