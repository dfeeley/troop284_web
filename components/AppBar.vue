<template>
  <v-app-bar
    ref="appbar"
    app
    color="white"
    light
    prominent
    shrink-on-scroll
    class="myappbar"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <div class="logo-container">
      <Logo/>
    </div>

    <v-spacer></v-spacer>

    <v-toolbar-items class="toolbar-items-container">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/activities">Activities</NuxtLink>
      <NuxtLink to="/recent">Recent</NuxtLink>
      <NuxtLink to="/upcoming">Upcoming</NuxtLink>
      <a href="mailto:davidpfeeley@gmail.com" target="_blank">Contact</a>
      <NuxtLink to="/testbed">Testbed</NuxtLink>
    </v-toolbar-items>

  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',

  data () {
    return {

    }
  },
  computed: {
    isScrolled() {
      return true
    }

  },
}
</script>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
}
.toolbar-items-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toolbar-items-container a {
  font-family: "Maven Pro";
  text-decoration: none;
  font-size: 16px;
  color: #999999;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0px 15px
}

</style>

