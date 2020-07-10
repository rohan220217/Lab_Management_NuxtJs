<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Login" name="login" prepend-icon="mdi-account" type="text"></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
      <v-snackbar
      timeout="5000"
      top
      rounded = 'pill'
      color="green "
      elevation="24"
      v-model="snackbar1"
    >
      Logged In successfully!
    </v-snackbar>
  </v-app>
</template>

<script>
  export default {
    data(){
      return{
        snackbar1: false
      }
    },
      layout: 'login',
    props: {
      source: String,
    },
    methods: {
      login(){
        this.snackbar1 = true
        this.$router.push('/login')
      }
    }
  }
</script>