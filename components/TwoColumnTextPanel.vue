<template>
  <div class="container">
    <div class="two-column">
      <h2 class="title">{{ heading }}</h2>
      <p class="body">{{ body }}</p>
    </div>
    <div class="slot-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwoColumnTextPanel',

  props: {
    heading: {
      type: String,
      required: false,
      default: "",
    },

    body: {
      type: String,
      required: true,
      default: "",
    },
  },

  methods: {

  },
}
</script>

<style scoped>
.container {
  padding: 32px 32px;
  margin-bottom: 25px;
}

.two-column {
  display: flex;
  flex-direction: row;
}

.two-column > *:not(:first-child) {
  margin-left: 50px;
}

h2 {
  color: rgb(62, 76, 33);
  font-size: 48px;
  font-weight: 700;
  font-family: "Maven Pro";
}

.slot-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
