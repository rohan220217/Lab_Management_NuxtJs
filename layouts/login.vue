
<template>
  <v-app>
      <v-container>
        <nuxt />
      </v-container>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sidebar: false,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/' },
          { title: 'Admin', icon: 'mdi-help-box', link: '/admin' },
          { title: 'Logout', icon: 'mdi-logout', link: '/' },
        ],
        right: null,
        item: 1,
     
      }
    },
    methods:{
      }
    }
  
</script>
<style>
</style>
