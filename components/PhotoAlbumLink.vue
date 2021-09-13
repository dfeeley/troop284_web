<template>
  <div v-if="link" class="photoalbumlink" title="Requires permission">
    <a :href="link" target="_blank">
      View Full Photo Album {{ source }}
      <v-icon small color="red">mdi-lock</v-icon>
    </a>
  </div>
</template>

<script>
export default {
  name: 'PhotoAlbumLink',

  props: {
    link: {
      type: String,
      required: false,
      default: null,
    },
  },

  computed: {
    isShutterfly() {
      return this.link && this.link.includes('shutterfly.com');
    },
    isGoogleDrive() {
      return this.link && this.link.includes('drive.google.com');
    },
    source() {
      return this.isShutterfly ? 'on Shutterfly' : this.isGoogleDrive ? 'on Google Drive' : 'online'
    }
  },

  methods: {

  },
}
</script>

<style>
.photoalbumlink {
  margin-bottom: 18px;
}
.photoalbumlink a {
  text-decoration: none;
  display: flex;
  align-items: center;
}

</style>
