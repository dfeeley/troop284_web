<template>
  <div>
    <v-carousel
      :interval="4000"
      :height="700"
      :hide-delimiters="false"
      :hide-delimiter-background="true"
    >

      <v-carousel-item class="slide-container">
        <div class="slide-image">
          <img src="/StarryNight.jpg"/>
        </div>
        <div class="slide-info">
            <img src="/shirt-badge.png"/>
            <p class="text">
              We are a newly established Boy Scout Troop within the Golden Gate Area Council sponsored by its Chartering Organization – VFW Post 8063 in Lafayette, California.
              We embrace the ideals of Scouting while 'advancing' young leaders of high moral character emphasizing citizenship training, character development, and personal fitness.
            </p>      
        </div>
      </v-carousel-item>

      <v-carousel-item
      >
        <div class="slide-image">
          <img src="/Hiking.jpg"/>
        </div>
        <div class="slide-info">
          <h3>Activities</h3>
          <p class="text">
            Outdoor adventures and outings are core to the Troop 284 experience, including several campouts per year, summer camps like Camp Wolfeboro, Shotgun Trap Shooting, the Berkeley Ropes Course, and an annual adventure at a premiere destination like Catalina Island, or Whitewater Rafting on the Klamath or American River.
          </p>      
        </div>
      </v-carousel-item>

      <v-carousel-item
        src="/EmigrantWilderness.jpg"
      >
      </v-carousel-item>

      <v-carousel-item
        src="/VFW-lit-up.jpg"
      >
      </v-carousel-item>

      <v-carousel-item
        src="/Scouts.jpg"
      >
      </v-carousel-item>
    
    </v-carousel>

  </div>
</template>

<script>
export default {
  name: 'MainCarousel',

  data () {
    return {

    }
  },
  methods: {

  },
}
</script>

<style>
.slide-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 480px 220px;
  align-items: center;
  justify-content: center;
  height: 700px;
  width: 100%;
}

.slide-image {
  height: 480px;
  width: 100%;
}

.slide-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.slide-info {
  height: 220px;
  width: 60%;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 220px;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  z-index: 0;
}

@media (max-width: 600px) {
  .overlay-content {
    grid-template-columns: auto;
  }

}

</style>
