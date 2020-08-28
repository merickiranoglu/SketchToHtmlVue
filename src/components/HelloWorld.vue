<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Sketch to HTML
        </h1>

        <p class="subheading font-weight-regular">
          Sketch your form and upload.
          
          <br />We will generate your HTML.
        </p>

        <a
            href="/parser"
            class="subheading mx-3"
          > Go ahead and try.
        </a>
      </v-col>

      <v-col class="mb-5" cols="12">
       
        <h2 class="headline font-weight-bold mb-3">
          Example Sketch :
        </h2>

        <v-row justify="center">
         <v-img
          alt="Vuetify Logo"
          class="shrink mt-3"
          contain
          src="./../assets/sampleSketch.jpg"
          transition="scale-transition"
          width="400"
        />
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Supported Elements
        </h2>

        <v-row justify="center">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label"
            class="subheading mx-3"
            target="_blank"
          > Label
          </a>

           <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
            class="subheading mx-3"
            target="_blank"
          > Input (Text)
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
            class="subheading mx-3"
            target="_blank"
          > Input (Button)
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>
