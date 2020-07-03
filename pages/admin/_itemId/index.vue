<template>
  <v-container fluid>
   <v-sheet class="yellow mb-4  pa-4 display-1 text-center">Edit Item</v-sheet>
  <add-product isAdmin :post="loadedPost" @add="edited"></add-product>
  </v-container>
</template>

<script>
import addProduct from '@/components/addProduct'
import axios from 'axios'
export default {
    components: {
        addProduct
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
    this.$store.dispatch("EDIT_ITEM", editedPost).then(() => {
        this.$router.push("/admin");

      });
      } 
    }
}
</script>

<style>

</style>