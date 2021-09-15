<template>
  <div class="container">
    <div class="two-column">
      <p>
      Troop 284 is proudly sponsored by our local
      </p>
      <img src="/vfw-post-8063-logo.png"/>
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

<style scoped>
.container {
  padding: 32px 32px;
}
.two-column {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-around;
  align-items: center;
  font-size: 32px;
}

.xtwo-column > *:not(:first-child) {
  margin-left: 50px;
}

@media (max-width: 600px) {
  .two-column {
    justify-content: center;
    text-align: center;
  }

  .two-column img {
    width: calc(100vw - 20px);
  }
}

</style>  
