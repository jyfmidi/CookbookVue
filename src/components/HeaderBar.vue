<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      position="right"
    >
      <v-list>
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
      <v-btn>
        <v-app-bar-title>Cyber Cookbook</v-app-bar-title>
      </v-btn>
      <v-spacer />
      <v-btn icon="mdi-magnify" />

      <v-btn>
        Recipe Center
      </v-btn>

      <v-btn
        variant="outlined"
        color="primary"
        class="ml-4 mr-4"
      >
        Connect!
      </v-btn>

      <v-btn
        icon="mdi-cookie-plus"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HeaderBar",

  setup() {
    let drawer = ref(false);
    let sideBarItems = [
      { text: "Add Ingredient", icon: "mdi-cookie-plus" },
      { text: "Add Recipe", icon: "mdi-text-box-plus" },
    ];

    return { drawer, sideBarItems };
  },
};
</script>