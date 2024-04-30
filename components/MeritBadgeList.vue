<template>
  <div class="meritbadgelist__outer">
    <div v-if="showFilter" class="table__actions">
      <v-text-field
        v-model="search"
        label="Filter"
        append-icon="mdi-magnify"
        clearable
        class="search-field"
      ></v-text-field>
    </div>

    <div class="meritbadgelist__container">

      <MeritBadge
          v-for="badge in filteredBadges"
          :key="badge.slug.current"
          :badge="badge"
      />
    </div>
  </div>

</template>

<script>

export default {
  props: {
    badges: {
      type: Array,
      required: true,
    },
    showFilter: {
      type: Boolean,
      required: false,
      default: true
    },
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    filteredBadges() {
      const search = this.search.toLowerCase()
      return this.badges.filter(obj => this.search === '' || obj.name.toLowerCase().includes(search))
    }
  },
}
</script>

<style>
.meritbadgelist__container {
  display: flex;
  flex-wrap: wrap;
}

.meritbadgelist__outer .search-field {
  max-width: 300px;
}

@media (max-width: 500px) {
  .meritbadgelist__container {
    margin: auto;
    justify-content: center;
  }
}
</style>


