<template>
  <v-container class="pa-0 mt-n4" style="background: #f5f1f1">
   
      <item :items = "loadedItems" />

    
  </v-container>
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
