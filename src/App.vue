<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-toolbar-items class="center hidden-sm-and-down">
        <v-btn router-link to="/" text>
          Sketch to HTML
        </v-btn>
      </v-toolbar-items>


      <v-spacer></v-spacer>

      <v-toolbar-items class="center hidden-sm-and-down">
        <v-btn router-link to="/Parser" text>
          Parser
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
