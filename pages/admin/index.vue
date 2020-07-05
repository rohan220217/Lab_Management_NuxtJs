<template>
  <div>
    <v-sheet class="red mb-4 mt-n6 lighten-3 pa-4 display-1 text-center">Admin Area</v-sheet>
    <v-btn block color="info" class="mb-4" @click="$router.push('/admin/add-item')">Add Product</v-btn>
    <item :items="loadedItems" isAdmin />
  </div>
</template>

<script>
import item from '@/components/Item'

export default {
  component:{
    item
  },
    data: () => ({
      
    }),
computed:{
      loadedItems(){
        return this.$store.getters.loadedItems
      }
      
    },
    methods: {
      
    },
  }
</script>
