<template>
  <v-container fluid>
   <v-sheet class="green mb-4 lighten-3 pa-4 display-1 text-center">Add Item</v-sheet>
  <add-product @add="addItem"></add-product>
  </v-container>
</template>

<script>
import addProduct from '@/components/addProduct'
export default {
    components: {
        addProduct
    },
    methods:{
      addItem(editedPost){
        console.log(editedPost)
    this.$store.dispatch("ADD_ITEM", editedPost).then(() => {
        this.$router.push("/admin");

      });
      }
    }

}
</script>

<style>
</style>