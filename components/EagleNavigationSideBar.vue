<template>
  <div>
    <h3>Contents</h3>
    <ul>
      <li
        v-for="section in sections"
        :key="section.slug._ref"
      >
        <SectionAnchor
          :section="section"
        >
        </SectionAnchor>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EagleNavigationSideBar',

  props: {
    sections: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>

</style>
