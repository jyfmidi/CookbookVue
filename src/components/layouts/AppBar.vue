<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    position="right"
  >
    <v-list density="compact">
      <v-list-subheader>Menu</v-list-subheader>
      <v-list-item
        v-for="(item, i) in sideBarItems"
        :key="i"
        :value="item"
        active-class="primary"
      >
        <v-list-item-avatar start>
          <v-icon :icon="item.icon" />
        </v-list-item-avatar>
        <v-list-item-title v-text="item.text" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar prominent>
    <v-btn
      variant="plain"
      @click="toIndex"
    >
      <v-app-bar-title>Cyber Cookbook</v-app-bar-title>
    </v-btn>
    <v-spacer />

    <v-btn>
      <v-icon
        start
        icon="mdi-cookie"
      />
      Ingredients
    </v-btn>

    <v-btn @click="toRecipeCenter">
      <v-icon
        start
        icon="mdi-text-box"
      />
      Recipes
    </v-btn>

    <v-btn
      variant="outlined"
      color="primary"
      class="ml-8 mr-8"
    >
      Connect!
    </v-btn>
    <v-btn
      icon="mdi-text-box-plus"
      @click.stop="drawer = !drawer"
    />
  </v-app-bar>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "AppBar",

  setup() {
    let drawer = ref(false);
    let sideBarItems = [
      { text: "Add Ingredient", icon: "mdi-cookie-plus" },
      { text: "Add Recipe", icon: "mdi-text-box-plus" },
    ];

    let router = useRouter();
    let toIndex = () => {
      router.push({
        name: "Index",
      });
    };

    let toRecipeCenter = () => {
      router.push({
        name: "RecipeCenter",
      });
    };

    return { drawer, sideBarItems, toIndex, toRecipeCenter };
  },
};
</script>