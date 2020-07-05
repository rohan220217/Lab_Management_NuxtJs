<template>
  <v-container fluid>
   <v-sheet class="yellow mb-4  pa-4 display-1 text-center">Edit Item</v-sheet>
  <add-product isAdmin :post="loadedPost" @add="edited"></add-product>
  <v-snackbar
      timeout="5000"
      top
      rounded="pill"
      color="green "
      elevation="24"
      v-model="snackbar1"
    >Product is edited!</v-snackbar>
  </v-container>
</template>

<script>
import addProduct from '@/components/addProduct'
import axios from 'axios'
export default {
    components: {
        addProduct
    },
    data(){
      return{
        snackbar1: false
      }
    },
    asyncData(context) {
    return context.app.$axios
      .$get(
        'https://nuxt-blog-c7247.firebaseio.com/' + "/item/" +
          context.params.itemId +
          ".json"
      )
      .then(data => {
        return {
          loadedPost: { ...data, id: context.params.itemId }
        };
      })
      .catch(e => context.error());
  },
methods:{
      edited(editedPost){
        this.snackbar1 = true
    this.$store.dispatch("EDIT_ITEM", editedPost).then(() => {
        this.$router.push("/admin");

      });
      } 
    }
}
</script>

<style>

</style>