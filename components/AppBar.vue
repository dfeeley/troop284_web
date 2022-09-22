<template>
  <div>
    <v-app-bar
      ref="appbar"
      app
      color="white"
      light
      :prominent="!isMobile"
      :shrink-on-scroll="!isMobile"
    >
      <v-app-bar-nav-icon v-if="isMobile" @click="drawer = true"></v-app-bar-nav-icon>

      <div class="logo-container" @click="$router.push('/')">
        <Logo :mobile="isMobile"/>
      </div>

      <v-spacer v-if="!isMobile"></v-spacer>

      <v-toolbar-items v-if="!isMobile" class="toolbar-items-container">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/activities">Activities</NuxtLink>
        <NuxtLink to="/recent">Recent</NuxtLink>
        <NuxtLink to="/upcoming">Upcoming</NuxtLink>

        <v-menu :open-on-hover="true" offset-y transition="slide-x-transition" bottom right>
          <template v-slot:activator="{ on }">
            <div>
              <v-btn text v-on="on">Resources</v-btn>
            </div>
          </template>
          <v-list>
            <!-- knowledge center pages -->
            <v-list-item v-for="page in knowledgeCenterPages" :key="page._id">
              <NuxtLink :to="`/knowledge/${page.slug.current}`">
                <v-list-item-title>{{ page.name }}</v-list-item-title>
              </NuxtLink>
            </v-list-item>

            <!-- document library links -->
            <v-list-item v-for="link in documentLibraryLinks" :key="link._id">
              <a :href="link.url" target="_blank">
                <v-list-item-title>{{ link.title }}</v-list-item-title>
              </a>
            </v-list-item>

            <v-list-item>
              <NuxtLink to="/eagle">
                <v-list-item-title>Path to Eagle</v-list-item-title>
              </NuxtLink>
            </v-list-item>
          </v-list>
        </v-menu>

        <a href="mailto:troop284scouting@gmail.com?subject=Troop%20284%20enquiry">Contact</a>
        <a href="https://www.facebook.com/troop284lafayette/" target="_blank">
          <v-icon>mdi-facebook</v-icon>
        </a>
      </v-toolbar-items>

    </v-app-bar>
      <v-navigation-drawer
          v-model="drawer"
          app
          temporary
        >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            active-class="primary"
          >
            <v-list-item to="/">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item to="/activities">
              <v-list-item-title>Activities</v-list-item-title>
            </v-list-item>

            <v-list-item to="/recent">
              <v-list-item-title>Recent</v-list-item-title>
            </v-list-item>

            <v-list-item to="/upcoming">
              <v-list-item-title>Upcoming</v-list-item-title>
            </v-list-item>

            <v-list-item v-for="page in knowledgeCenterPages" :key="page._id" :to="`/knowledge/${page.slug.current}`">
              <v-list-item-title>{{ page.name }}</v-list-item-title>
            </v-list-item>

            <v-list-item to="/eagle">
              <v-list-item-title>Path to Eagle</v-list-item-title>
            </v-list-item>

            <v-list-item href="mailto:troop284scouting@gmail.com" target="_blank">
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppBar',

  data () {
    return {
      drawer: false,
    }
  },

  computed: {
    ...mapState('knowledgeCenter', ['knowledgeCenterPages']),
    ...mapState('documentLibrary', ['documentLibraryLinks']),

    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },

    isScrolled() {
      return true
    },

  },
}
</script>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
}

.toolbar-items-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toolbar-items-container a,
.toolbar-items-container button.v-btn.v-btn--text,
.v-menu__content a {
  font-family: "Maven Pro";
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0px 15px;
  color: #999999;
  letter-spacing: normal;
}

@media (max-width: 600px) {
  .logo-container {
    width: calc(100vw - 112px);
  }
}

</style>

