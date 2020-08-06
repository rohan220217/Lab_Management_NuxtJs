<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="editedPost.name"
          :counter="15"
          :rules="nameRules"
          label="Item Name"
          required
        ></v-text-field>
        <v-text-field v-model="editedPost.link" :counter="25" label="Item Image Link" required></v-text-field>
        <v-text-field
          v-model="editedPost.rating"
          :counter="3"
          :rules="nameRules"
          label="Rating"
          required
        ></v-text-field>
        <v-textarea v-model="editedPost.description" color="teal" :rules="nameRules" required>
          <template v-slot:label>
            <div>Description</div>
          </template>
        </v-textarea>
        <v-slider v-model="editedPost.in_stock" label="In Stock" class="mt-4" required thumb-label></v-slider>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="add()">{{this.isAdmin ? 'Edit Item' : 'Add Item'}}</v-btn>

        <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

        <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
  export default {
  props: {
    post: {
      type: Object,
      required: false
    },
    isAdmin: {
        type: Boolean,
        required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            name: "",
            rating: "",
            description: "",
            in_stock: "",
            link: "",
            date: new Date()
          },

          valid: true,
      nameRules: [
        v => !!v || 'Is required',
        v => (v && v.length <= 100) || 'Must be less than 100 characters',
      ],
       
    };
  },

    methods: {
      add () {        
        this.$emit('add', this.editedPost)
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>