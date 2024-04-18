<template>
  <div class="meritbadge__container">

    <a :href="requirements_url">
      <img :src="thumbnail"/>
    </a>
    <div class="meritbadge__name">{{ badge.name }}</div>
    <div class="meritbadge__links">
      <div>
        <a :href="requirements_url" target="_blank">Reqs</a>
      </div>
      <div>
        <a v-if="badge.pamphlet_url" :href="badge.pamphlet_url" target="_blank">Pamphlet</a>
      </div>
      <div>
        <a v-if="badge.workbook_url" :href="badge.workbook_url" target="_blank">Workbook</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    badge: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('meritbadges', ['forSlug']),
    thumbnail() {
      return `https://scoutmasterbucky.com/merit-badges/${this.badge.slug.current}/${this.badge.slug.current}.png`
    },
    requirements_url() {
      return `https://www.scouting.org/merit-badges/${this.badge.slug.current}/`
    },
  },
}
</script>

<style>
.meritbadge__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.meritbadge__container img {
  width: 150px;
  height: 150px;
}

.meritbadge__name {
  font-weight: bold;
}

.meritbadge__links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.meritbadge__links div {
  width: 100%;
  text-align: center;
  padding: 0px 10px;
}

</style>
