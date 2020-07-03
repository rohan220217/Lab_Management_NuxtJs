<template>
  <v-container>
   
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
