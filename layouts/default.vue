

<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">JNU_LAB</v-list-item-title>
          <v-list-item-subtitle>subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"></v-img>
      </template>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>
        <v-toolbar-title >JNU_LAB</v-toolbar-title>
      

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-content style="cursor: pointer" @click='item_view(item.link)'>            
            <v-list-item-title><v-icon>{{item.icon}}</v-icon> {{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-toolbar-items>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-5" class="overflow-y-auto" max-height="1000" style="background: #f5f1f1">
      <v-container style="height: 1500px; margin-top: 150px; ">
        <nuxt />
      </v-container>
    </v-sheet>
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
      item_view(link){
       this.$router.push(link)
      }
    }
  }
</script>
<style>
</style>
