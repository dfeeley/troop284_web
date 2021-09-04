<template>
  <div>
    <h3 v-if="title">{{title}}</h3>
    <client-only>
      <v-gallery v-if="images" :id="`gallery-${idx}`" :images="galleryImages" :index="index" @close="index = null"></v-gallery>
    </client-only>

    <div class="images">

      <MySanityImage 
        v-for="(img, imageIdx) in images" 
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
  name: 'SanityImageGallery',

  props: {
    images: {
      type: Array,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
  },

  data () {
    return {
      index: null,
    }
  },
  computed: {
    galleryImages() {
      return this.images ? this.images.map(obj => SanityService.imageUrl(obj)) : []
    }
  },
  methods: {

  },
}
</script>

<style>
.images {
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  justify-content: center;
  gap: 10px;
  margin-bottom: 36px;
}

@media (max-width: 400px) {
  .images img {
    width: 160px;
    height: auto;
  }
}
</style>
