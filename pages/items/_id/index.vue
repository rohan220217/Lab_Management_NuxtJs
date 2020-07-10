<template>
  <v-container>
    <v-sheet class="blue lighten-3 pa-4 display-1 text-center">{{loadedItems.name}}</v-sheet>

    <v-card>
      <v-img contain class="white--text align-end mt-3" height="400px" :src="`${loadedItems.link}`">
        <v-card-title>{{loadedItems.name}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        <v-rating
          :value="loadedItems.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">{{loadedItems.rating}} (413)</div>
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Number of stock : {{loadedItems.in_stock}}</div>

        <div>
          Description:
          {{loadedItems.description}}
        </div>
      </v-card-text>

      <v-card-actions style="justify-content: center ">
        <v-btn color="orange" text>Add to Cart</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
asyncData(context) {
    return context.app.$axios.$get('https://nuxt-blog-c7247.firebaseio.com/item/' + context.params.id + '.json')
      .then(data => {
        return {
          loadedItems: data
        }
      })
      .catch(e => context.error(e))
  },
}
</script>

<style>
</style>