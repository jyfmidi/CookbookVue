<template>
  <v-container>
    <v-row
      v-for="n in rowCount"
      :key="n"
    >
      <v-col
        v-for="k in colCount"
        :key="k"
      >
        <div v-if="((n - 1) * colCount + k) < recipeList.length">
          <RecipeCard :recipeInfo="recipeList[((n - 1) * colCount + k)]" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import useRecipeList from "../../hooks/useRecipeList";
import RecipeCard from "../widgets/RecipeCard.vue";
import { ref, toRef } from "vue";

export default {
  name: "RecipeShelf",

  components: {
    RecipeCard,
  },

  setup() {
    let colCount = 3;
    let recipeList = useRecipeList();
    let rowCount = Math.trunc(recipeList.length / colCount);

    return { colCount, rowCount, recipeList };
  },
};
</script>
