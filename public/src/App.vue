<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Rapid </span>
        <span class="font-weight-light">Recipes</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Right side toolbar things -->
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  mounted() {
    console.log(this.db)
  },
  methods: {

  }
}
</script>
