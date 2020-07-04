<template>
<v-layout row>
     <v-flex  md3 sm4 xs12 v-for="item in items" :key="item.name" class="pa-2 ">

 <v-card :loading="loading" max-width="374"  outlined
        hover>
    <v-img
      height="250"
      :src="`${item.link}`"
    ></v-img>

    <v-card-title class="overline">{{item.name}}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0 mt-n4">
        <v-rating :value="parseInt(item.rating)" color="amber" dense half-increments readonly size="14"></v-rating>

        <div class="grey--text ml-4 ">{{item.rating}} (413)</div>
      </v-row>

      <div class="my-1 caption">Number of stock : {{item.in_stock}}</div>
      <div class="my-1 caption">Last Updated : {{item.date | date}}</div>

      <div class="caption">
        Description:
        {{item.description | description}}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions style="background: #dcd9d9">
      <v-btn
        @click="view(item.id)"
        :color=" isAdmin ? 'yellow' : 'green '"
        style="text-decoration: none"
        text
      >{{ isAdmin ? 'Edit' : 'View' }}</v-btn>
      <v-spacer></v-spacer>
      <v-btn :color="isAdmin ? 'red lighten-2' : 'deep-purple lighten-2'" text @click="borrow(item.id)">{{ isAdmin ? 'Delete' : 'Borrow' }}</v-btn>
    </v-card-actions>
  </v-card>

     </v-flex>
</v-layout>
 
</template>

<script>
  export default {
    props: {
    isAdmin: {
      type: Boolean,
      default: false,
      required: false
    },
    items: {
      type: Array,
      required: true
    }},
    data: () => ({
      loading: false,
      selection: 1,
    }),
    

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      view(id){
        if(this.isAdmin){
          this.$router.push('admin/'+ id)
        }else{
          this.$router.push('/items/' + id)
        }
        
      },
      borrow(id){
         if(this.isAdmin){
          this.$store.dispatch('DELETE_ITEM', id).then(() => {
        this.$router.push("/");

      });
        }else{
          this.$router.push('/borrow')
        }
      }
    },
  }
</script>
