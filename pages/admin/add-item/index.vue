<template>
  <v-container fluid>
    <v-sheet class="green mb-4 lighten-3 pa-4 display-1 text-center">Add Item</v-sheet>
    <add-product @add="addItem"></add-product>
    <v-snackbar
      timeout="5000"
      top
      rounded = 'pill'
      color="green "
      elevation="24"
      v-model="snackbar1"
    >
      Product is added successfully!
    </v-snackbar>

  </v-container>
</template>

<script>
import addProduct from '@/components/addProduct'
export default {
  data(){
    return{
      snackbar1: false
    }
  },
    components: {
        addProduct
    },
    methods:{
      addItem(editedPost){
        this.snackbar1 = true
        this.$store.dispatch("ADD_ITEM", editedPost).then(() => {
        this.$router.push("/admin");
        
      });
      }
    }

}
</script>

<style>
</style>