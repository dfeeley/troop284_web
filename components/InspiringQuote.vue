<template>
  <v-container fluid class="quote-container">
    <v-row no-gutters>
      <v-col cols="xs-12" class="quote-text-container">
        <div class="quote-text">
          <p>“TRUE LEADERS DON’T CREATE FOLLOWERS…</p>
          <p>THEY CREATE MORE LEADERS.”</p>
        </div>
        <div class="quote-text-author">
          <p>Lord Baden Powell</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
</script>

<style scoped>
.quote-container {
  height: 811px;
  background-image: url("/StarryNight.jpg");
  background-repeat: no-repeat;
  background-position: 0.00% 73.59%;
  background-color: transparent;
  background-size: cover;
}

.quote-text-container {
  padding-top: 50px;
  font-weight: 700;
  color: rgb(104, 145, 223);
  font-family: "Open Sans" !important;
  font-style: normal !important;
  text-align: center;
  letter-spacing: 3px !important;
}

.quote-text {
  text-transform: uppercase !important;
  font-size: 32px;
}

.quote-text-author {
  font-size: 1.5rem;
}
</style>
