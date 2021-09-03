<template>
  <div class="contactus__container">
    <div class="contactus__container__btn">
      <v-btn color="primary" href="mailto:davidpfeeley@gmail.com" target="_blank">CONTACT US TO LEARN MORE</v-btn>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  },
  methods: {

  },
}
</script>

<style>
.contactus__container {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-gap: 20px;
}

</style>
