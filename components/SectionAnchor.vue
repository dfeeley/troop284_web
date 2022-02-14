<template>
  <a v-scroll-to="{
    el: '#' + section.slug.current,
    offset: -100,
    }"
    href="#"
  >{{ section.name }}</a>
</template>

<script>
export default {
  name: 'SectionAnchor',
  props: {
    section: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>

</style>
