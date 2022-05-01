<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import Index from "./pages/Index.vue";

export default {
  name: "App",

  components: {
    Index,
  },

  data: () => ({}),
};
</script>
