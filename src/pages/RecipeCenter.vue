<template>
  <div>
    <AppBar />
    <v-main>
      <RecipeShelf />
    </v-main>
  </div>
</template>

<script>
import AppBar from "../components/layouts/AppBar.vue";
import RecipeShelf from "../components/layouts/RecipeShelf.vue";

export default {
  name: "RecipeCenter",

  components: {
    AppBar,
    RecipeShelf,
  },

  data: () => ({}),
};
</script>
