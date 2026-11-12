<template>
  <div class="meritbadge__container">

    <a :href="requirements_url" target="_blank">
      <img :src="thumbnail"/>
    </a>
    <div class="meritbadge__name">
      <a :href="requirements_url" target="_blank">
      {{ badge.name }}
      </a>
    </div>
    <div class="meritbadge__links">
      <div>
        <a :href="requirements_url" target="_blank">Reqs</a>
      </div>
      <div>
        <a :href="pamphlet_url" target="_blank">Pamphlet</a>
      </div>
      <div>
        <a :href="workbook_url" target="_blank">Workbook</a>
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
      const override = this.badge.override_image_url;
      return (override === null || override === "" ) ? `https://scoutmasterbucky.com/merit-badges/${this.badge.slug.current}/${this.badge.slug.current}.png` : override
    },

    requirements_url() {
      return `https://www.scouting.org/merit-badges/${this.badge.slug.current}/`
    },

    pamphlet_url() {
      const override = this.badge.pamphlet_url;
      return (override === null || override === "") ? `https://filestore.scouting.org/filestore/Merit_Badge_ReqandRes/Pamphlets/${this.badge.name}.pdf` : override
    },
    workbook_url() {
      const override = this.badge.workbook_url;
      return (override === null || override === "") ? `https://filestore.scoutmasterbucky.com/merit-badges/${this.badge.slug.current}/${this.badge.slug.current}-workbook.pdf` : override
    },  },
}
</script>

<style>
.meritbadge__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 225px;
}

.meritbadge__container img {
  width: 150px;
  height: 150px;
}

.meritbadge__name {
  font-weight: bold;
}

.meritbadge__name a {
  color: var(--header);
  text-decoration: none;
}

.meritbadge__links {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.meritbadge__links div {
  width: 33%;
  text-align: center;
  font-size: 0.8em;
  padding: 0px 10px;
}

.meritbadge__links a  {
  color: var(--header);
  font-weight: bold;
}


</style>
