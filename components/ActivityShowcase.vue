<template>
  <div class="showcase__container">
    <h2>
      {{ showcase.name }}
    </h2>

    <div class="body__content">
      <SanityContent :blocks="showcase.body"/>
    </div>

    <client-only>
      <v-gallery v-if="showcase.images" :id="`gallery-${idx}`" :images="galleryImages" :index="index" @close="index = null"></v-gallery>
    </client-only>
    <div class="images">
      <MySanityImage 
        v-for="(img, imageIdx) in showcase.images" 
        :key="img._id" 
        :image="img"
        :cdn-width="200"
        :cdn-height="200"
        fit="clip"
        @click="index =  imageIdx"
      />
      
    </div>
  </div>
</template>

<script>
import SanityService from '~/services/sanity.service'

export default {
  props: {
    showcase: {
      type: Object,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },

  },

  data () {
    return {
      index: null,
    }
  },

  computed: {
    galleryImages() {
      return this.showcase.images ? this.showcase.images.map(obj => SanityService.imageUrl(obj)) : []
    }

  },

  methods: {

  },
}
</script>

<style scoped>
h2 {
  color: rgb(62, 76, 33);
  text-transform: uppercase;
  font-size: 48px;
  font-weight: 700;
  margin-top: 36px;
  margin-bottom: 36px;
}

.images {
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  justify-content: center;
  gap: 10px;
  margin-bottom: 36px;
}

.body__content {
  font-size: 20px;
  line-height: 31px;
}

@media (max-width: 400px) {
  .images img {
    width: 160px;
    height: auto;
  }


}

</style>
