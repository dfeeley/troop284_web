<template>
  <div class="meritbadgelist__container">
    <MeritBadge
        v-for="badge in badges"
        :key="badge.slug.current"
        :badge="badge"
    />
  </div>
</template>

<script>

export default {
  props: {
    badges: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
.meritbadgelist__container {
  display: flex;
  flex-wrap: wrap;
}

</style>


